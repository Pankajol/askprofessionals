import { connect } from '../../../dbConfig/dbConfig'; // Database connection
import EmployerEnquiry from '../../../models/employerModel'; // EmployerEnquiry model
import { NextResponse } from 'next/server';

connect(); // Connect to the database

// Handle the POST request for employer enquiries
export async function POST(request) {
  try {
    const reqBody = await request.json(); // Get the JSON body from the request
    const { website, employees, resourceType, name, email, mobile, company, message } = reqBody;

    // Validate required fields
    if (!website || !name || !email || !mobile) {
      return NextResponse.json({ error: 'Website, Name, Email, and Mobile are required' }, { status: 400 });
    }

    // Create a new enquiry
    const newEnquiry = new EmployerEnquiry({
      website,
      employees,
      resourceType,
      name,
      email,
      mobile,
      company,
      message,
    });

    // Save the enquiry to the database
    const savedEnquiry = await newEnquiry.save();

    // Return success response
    return NextResponse.json(
      { message: 'Employer enquiry submitted successfully', enquiry: savedEnquiry },
      { status: 201 }
    );

  } catch (error) {
    // Handle any errors
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


// Handle the GET request to fetch all employer enquiries
export async function GET(request) {
    try {
      // Fetch all employer enquiries from the database
      const enquiries = await EmployerEnquiry.find(); 
  
      // Return the fetched enquiries in the response
      return NextResponse.json(
        { message: 'Employer enquiries fetched successfully', enquiries },
        { status: 200 }
      );
  
    } catch (error) {
      // Handle any errors
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
  
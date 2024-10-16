// import { connect } from '../../../dbConfig/dbConfig';
// import Job from '../../../models/jobModel';
// import { NextResponse } from 'next/server';

// connect();

// export async function POST(request) {
//   try {
//     const reqBody = await request.json();
//     const {
//       jobTitle,
//       jobType,
//       EmploymentType,
//       AdditionalQuestionType,
//       InterviewDateType,
//       location,
//       salary,
//       experience,
//       description,
//     } = reqBody;

//     // Create a new job post
//     const newJob = new Job({
//       jobTitle,
//       jobType,
//       EmploymentType,
//       AdditionalQuestionType,
//       InterviewDateType,
//       location,
//       salary,
//       experience,
//       description,
//     });

//     // Save the new job post
//     const savedJob = await newJob.save();

//     return NextResponse.json({ message: 'Job posted successfully', job: savedJob }, { status: 201 });

//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }



// CURD OPRATION 
import { connect } from '../../../dbConfig/dbConfig';
import Job from '../../../models/jobModel';
import { NextResponse } from 'next/server';

connect();

// CREATE a new job post (POST)
export async function POST(request) {
  try {
    const reqBody = await request.json();
    const {
      jobTitle,
      jobType,
      EmploymentType,
      AdditionalQuestionType,
      InterviewDateType,
      location,
      salary,
      experience,
      description,
    } = reqBody;

    // Create a new job post
    const newJob = new Job({
      jobTitle,
      jobType,
      EmploymentType,
      AdditionalQuestionType,
      InterviewDateType,
      location,
      salary,
      experience,
      description,
    });

    // Save the new job post
    const savedJob = await newJob.save();

    return NextResponse.json({ message: 'Job posted successfully', job: savedJob }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// READ all jobs (GET)
export async function GET() {
  try {
    const jobs = await Job.find({});
    return NextResponse.json({ jobs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// UPDATE a job (PUT)
export async function PUT(request) {
  try {
    const reqBody = await request.json();
    const { id } = reqBody;

    const updatedJob = await Job.findByIdAndUpdate(id, reqBody, {
      new: true,
      runValidators: true,
    });

    if (!updatedJob) {
      return NextResponse.json({ message: 'Job not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Job updated successfully', job: updatedJob }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE a job (DELETE)
export async function DELETE(request) {
  try {
    const { id } = await request.json();

    const deletedJob = await Job.findByIdAndDelete(id);

    if (!deletedJob) {
      return NextResponse.json({ message: 'Job not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Job deleted successfully' }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


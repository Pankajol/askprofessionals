import { NextResponse } from "next/server";

// This function handles POST requests to the /api/contact endpoint
export async function POST(request) {
  try {
    // Parse the incoming JSON request body
    const { name, email, message } = await request.json();

    // Validate input fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Create FormData to send to Web3Forms
    const formData = new FormData();
    formData.append("access_key", process.env.EMAIL_API_KEY); // Your Web3Forms access key
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    // Send data to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    // Handle the response from Web3Forms
    if (!data.success) {
      return NextResponse.json({ error: data.message }, { status: 400 });
    }

    // Respond with a success message
    return NextResponse.json(
      { success: true, message: "Form submitted successfully." },
      { status: 200 }
    );

  } catch (error) {
    // Log the error to the console
    console.error("Error in API route:", error.message);
    // Respond with a 500 Internal Server Error status and message
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

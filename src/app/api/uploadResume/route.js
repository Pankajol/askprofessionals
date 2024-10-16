import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file) {
    return new Response(
      JSON.stringify({ message: "No file uploaded." }),
      { status: 400 }
    );
  }

  try {
    const fileBuffer = Buffer.from(await file.arrayBuffer());

    const uploadPromise = new Promise((resolve, reject) => {
      cloudinary.v2.uploader.upload_stream(
        { 
          resource_type: "raw", // Ensure the file is treated as a raw file (e.g., PDF)
          public_id: file.name,
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      ).end(fileBuffer);
    });

    const result = await uploadPromise;

    return new Response(
      JSON.stringify({ url: result.secure_url }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error uploading file:", error);
    return new Response(
      JSON.stringify({ message: "Error uploading file" }),
      { status: 500 }
    );
  }
}

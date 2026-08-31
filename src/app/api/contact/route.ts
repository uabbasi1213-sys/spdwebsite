import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, pickupLocation, deliveryLocation, cargoType, serviceType, message } = body;

    // In production, you'd send an email here using a service like Resend, Nodemailer, etc.
    // For now, we'll log the submission and return success.
    console.log("New contact form submission:", {
      name,
      phone,
      email,
      pickupLocation,
      deliveryLocation,
      cargoType,
      serviceType,
      message,
      timestamp: new Date().toISOString(),
    });

    // You can integrate an email service here, for example:
    // await sendEmail({ to: 'info@superpakdata.com', subject: 'New Quote Request', body: ... })

    return NextResponse.json({ success: true, message: "Request received successfully" });
  } catch {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}

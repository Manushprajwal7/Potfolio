import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Debug environment variables
    console.log("Environment check:");
    console.log("SMTP_EMAIL:", process.env.SMTP_EMAIL ? "✓ Set" : "✗ Missing");
    console.log(
      "SMTP_APP_PASSWORD:",
      process.env.SMTP_APP_PASSWORD ? "✓ Set" : "✗ Missing"
    );

    // Check if credentials are available
    if (!process.env.SMTP_EMAIL || !process.env.SMTP_APP_PASSWORD) {
      console.error("Missing SMTP credentials in environment variables");
      return NextResponse.json(
        {
          error: "Email service not configured properly. Missing credentials.",
        },
        { status: 500 }
      );
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.SMTP_EMAIL, // Your Gmail address
        pass: process.env.SMTP_APP_PASSWORD, // Your Gmail App Password
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log("SMTP connection verified successfully");
    } catch (error) {
      console.error("SMTP verification failed:", error);
      return NextResponse.json(
        { error: "Email service configuration error" },
        { status: 500 }
      );
    }

    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: "manushprajwal555@gmail.com", // Your email where you want to receive messages
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">New Portfolio Contact</h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 5px;">Contact Details:</h3>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #4CAF50; border-radius: 5px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 12px;">
            <p>This email was sent from your portfolio website.</p>
            <p>Sent at: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Log successful submission
    console.log("=== EMAIL SENT SUCCESSFULLY ===");
    console.log("To:", "manushprajwal555@gmail.com");
    console.log("From:", email);
    console.log("Subject:", subject);
    console.log("Timestamp:", new Date().toISOString());
    console.log("===============================");

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);

    // More specific error handling
    if (error.code === "EAUTH") {
      return NextResponse.json(
        {
          error: "Email authentication failed. Please check SMTP credentials.",
        },
        { status: 500 }
      );
    } else if (error.code === "ECONNECTION") {
      return NextResponse.json(
        { error: "Failed to connect to email server." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

// Create this file as test-email.js in your project root
// Run with: node test-email.js

const nodemailer = require("nodemailer");
require("dotenv").config({ path: ".env.local" });

async function testEmail() {
  console.log("Testing email configuration...");
  console.log("SMTP_EMAIL:", process.env.SMTP_EMAIL);
  console.log("SMTP_PASSWORD exists:", !!process.env.SMTP_PASSWORD);
  console.log("RECIPIENT_EMAIL:", process.env.RECIPIENT_EMAIL);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.verify();
    console.log("✅ SMTP connection verified successfully!");

    // Send test email
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: process.env.RECIPIENT_EMAIL,
      subject: "Test Email from Contact Form",
      text: "This is a test email to verify the setup is working.",
    });

    console.log("✅ Test email sent successfully!");
  } catch (error) {
    console.error("❌ Error:", error.message);

    if (error.code === "EAUTH") {
      console.log("\n🔧 Fix: Check your Gmail App Password");
      console.log("1. Enable 2FA on your Google Account");
      console.log("2. Generate an App Password for Mail");
      console.log("3. Use the 16-character App Password in .env.local");
    }
  }
}

testEmail();

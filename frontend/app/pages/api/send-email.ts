import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
// import WelcomeTemplate from "../../emails/WelcomeTemplate";
// import { sendEmail } from "../../lib/email";
import nodemailer from "nodemailer"

type EmailPayload = {
  to: string
  subject: string
  html: string
}

// Replace with your SMTP credentials
const smtpOptions = {
  host: process.env.SMTP_HOST || "smtp.mailtrap.io",
  port: parseInt(process.env.SMTP_PORT || "2525"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || "user",
    pass: process.env.SMTP_PASSWORD || "password",
  },
}

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  })

  return await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL,
    ...data,
  })
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await sendEmail({
    to: "deadlyhunter888@gmail.com",
    subject: "Welcome to NextAPI",
    html: 'HI',
  });

  return res.status(200).json({ message: "Email sent successfully" });
}
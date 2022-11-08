import nodemailer from 'nodemailer';

const SENDER_EMAIL = process.env.SENDER_EMAIL;
const SENDER_PASSWORD = process.env.SENDER_PASSWORD;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: SENDER_EMAIL,
    pass: SENDER_PASSWORD,
  },
});

export const sendEmail = async (
  to: string,
  subject: string,
  html: string,
  files
) => {
  const mailOptions = {
    from: SENDER_EMAIL,
    to,
    subject,
    html,
    attachments: [
      {
        filename: 'invoice.pdf',
        content: files,
        contentType: 'application/pdf',
      },
    ],
  };

  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

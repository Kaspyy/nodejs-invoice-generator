import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { Invoice } from '../../types/types';
import { generateHTML } from './helpers';

dotenv.config();

const SENDER_EMAIL = process.env.SENDER_EMAIL;
const OAUTH2_CLIENT_ID = process.env.OAUTH2_CLIENT_ID;
const OAUTH2_CLIENT_SECRET = process.env.OAUTH2_CLIENT_SECRET;
const OAUTH2_REFRESH_TOKEN = process.env.OAUTH2_REFRESH_TOKEN;

const OAuth2 = google.auth.OAuth2;
const OAuth2_client = new OAuth2(OAUTH2_CLIENT_ID, OAUTH2_CLIENT_SECRET);
OAuth2_client.setCredentials({
  refresh_token: OAUTH2_REFRESH_TOKEN,
});

const sendEmail = async (invoice: Invoice) => {
  const { shipping, invoice_nr } = invoice;

  const mailOptions = {
    from: `ForeShop Inc. <${SENDER_EMAIL}>`,
    to: shipping.email,
    subject: `Invoice #${invoice_nr}`,
    html: generateHTML(shipping.name),
    attachments: [
      {
        filename: 'invoice.pdf',
        path: `public/invoices/invoice-${invoice_nr}.pdf`,
        contentType: 'application/pdf',
      },
    ],
  };

  const accessToken = await OAuth2_client.getAccessToken();

  const transporter = nodemailer.createTransport({
    //@ts-ignore
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: SENDER_EMAIL,
      clientId: OAUTH2_CLIENT_ID,
      clientSecret: OAUTH2_CLIENT_SECRET,
      refreshToken: OAUTH2_REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });

  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

export { sendEmail };

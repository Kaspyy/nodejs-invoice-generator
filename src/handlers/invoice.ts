// import shortId from 'shortid';
// import path from 'path';
// import { generatePdf } from '../utils/pdf-generator/pdf-generator';
// import { sendEmail } from '../utils/email-sender';
// import client from '../data/clients';

// const handleCreateInvoice = async (
//   req: CreateInvoiceRequest,
//   res: CreateInvoiceResponse
// ) => {
//   try {
//     await invoiceSchema.validateAsync(req.body);

//     const { moreDetails, clientId, items, paid } = req.body;

//     const destinationMail = client.shipping.email;

//     const invoiceId = shortId.generate();
//     const invoiceNumber = `FACT-${invoiceId} + '-' + ${clientId}`;

//     items.forEach(item => {
//       item.amountSum = item.quantity * item.price;
//     });

//     const subtotal = items.reduce((acc, item) => acc + item.amountSum, 0);

//     const filename = `${invoiceNumber}.pdf`;
//     const filepath = path.join(__dirname, '../public/invoices', filename);

//     const invoiceDetails = { client, items, invoiceNumber, paid, subtotal };

//     generatePdf(invoiceDetails, filepath);

//     const files = [filepath];

//     sendEmail(
//       destinationMail,
//       `Invoice: ${invoiceNumber}`,
//       `
//     <!-- HTML Codes by Quackit.com -->
//     <!DOCTYPE html>
//     <title>Text Example</title>
//     <style>
//     div.container {
//     background-color: #ffffff;
//     }
//     div.container p {
//     font-family: Arial;
//     font-size: 14px;
//     font-style: normal;
//     font-weight: normal;
//     text-decoration: none;
//     text-transform: none;
//     color: #000000;
//     background-color: #ffffff;
//     }
//     </style>
//     <div class="container">
//     <p>Hello,</p>
//     <p></p>
//     <p>I hope everything is good from your side. We have issued invoice no. <b>${invoiceNumber}</b> , please find it below.</p>
//     <p>Details: ${moreDetails} </p>
//     <p>Can you please proceed with the payment?</p>
//     <p>Thanks.</p>
//     <p><b>Note -> This is an automatic email.</b>
//     <p></p>
//     </div>
//     `,
//       files
//     );

//     return res.send({ success: true, data: { destinationMail } });
//   } catch (error) {
//     return res.send({ success: false, error });
//   }
// };

// export default handleCreateInvoice;

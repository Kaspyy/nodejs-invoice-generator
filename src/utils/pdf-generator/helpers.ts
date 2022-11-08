import { Invoice } from '../../types/types';

function generateHeader(doc: PDFKit.PDFDocument) {
  doc
    .image('./public/images/logo.png', 50, 45, { width: 30 })
    .fillColor('#444444')
    .fontSize(20)
    .text('ForeShop Inc.', 90, 57)
    .fontSize(10)
    .text('123 Main Street', 200, 65, { align: 'right' })
    .text('New York, NY, 10025', 200, 80, { align: 'right' })
    .moveDown();
}

function generateFooter(doc: PDFKit.PDFDocument) {
  doc
    .fontSize(10)
    .text(
      'Payment is due within 15 days. Thank you for your business.',
      50,
      780,
      { align: 'center', width: 500 }
    );
}

function generateCustomerInformation(
  doc: PDFKit.PDFDocument,
  invoice: Invoice
) {
  const shipping = invoice.shipping;

  doc
    .text(`Invoice Number: ${invoice.invoice_nr}`, 50, 200)
    .text(`Invoice Date: ${new Date()}`, 50, 215)
    .text(`Balance Due: ${invoice.subtotal - invoice.paid}`, 50, 130)

    .text(shipping.name, 300, 200)
    .text(shipping.address, 300, 215)
    .text(`${shipping.city}, ${shipping.state}, ${shipping.country}`, 300, 130)
    .moveDown();
}

export { generateHeader, generateFooter, generateCustomerInformation };

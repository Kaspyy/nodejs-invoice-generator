import fs from 'fs';
import PDFDocument from 'pdfkit';
import { Invoice } from '../../types/types';
import {
  generateCustomerInformation,
  generateFooter,
  generateHeader,
  generateInvoiceTable,
} from './helpers';

const createInvoice = (invoice: Invoice, path: string) => {
  const doc = new PDFDocument({ margin: 50 });

  generateHeader(doc);
  generateCustomerInformation(doc, invoice);
  generateInvoiceTable(doc, invoice);
  generateFooter(doc);

  doc.end();
  doc.pipe(fs.createWriteStream(path));
};

export { createInvoice };

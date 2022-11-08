import fs from 'fs';
import PDFDocument from 'pdfkit';
import { Invoice } from '../../types/types';
import { generateFooter, generateHeader } from './helpers';

const createInvoice = (invoice: Invoice, path: string) => {
  let doc = new PDFDocument({ margin: 50 });

  generateHeader(doc); // Invoke `generateHeader` function.
  generateFooter(doc); // Invoke `generateFooter` function.

  doc.end();
  doc.pipe(fs.createWriteStream(path));
};

export default createInvoice;

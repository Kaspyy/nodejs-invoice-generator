import { createInvoice } from './modules/pdf-generator/pdf-generator';
import { sendEmail } from './modules/email-sender';
import invoice from './data/clients';

const { invoice_nr } = invoice;

createInvoice(invoice, `public/invoices/invoice-${invoice_nr}.pdf`);
sendEmail(invoice);

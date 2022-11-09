import createInvoice from './utils/pdf-generator/pdf-generator';
import invoiceDetails from './data/clients';

createInvoice(invoiceDetails, 'public/invoices/invoice.pdf');

import createInvoice from './utils/pdf-generator/pdf-generator';
import invoiceDetails from './data/clients';

createInvoice(invoiceDetails, 'invoice.pdf');

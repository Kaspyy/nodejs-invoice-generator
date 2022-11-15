# Node.js Invoice Generator
A Node.js app that generates an invoice in PDF format and sends it as a attachment in personalized email.  
It could easily be implemented in e-commerce web app that uses Node.js

## Installation
First, configure the `.env` file with your credentials
```sh
SENDER_EMAIL=<your email>
SENDER_PASSWORD=<your password>
RECEIVER_EMAIL=<your email> # it is only for testing purposes
OAUTH2_CLIENT_ID=<your client id>
OAUTH2_CLIENT_SECRET=<your client secret>
OAUTH2_REFRESH_TOKEN=<your refresh token>
```
Then, in projects main directory, simply run:
```sh
npm install
npm start
```

## Technologies
- Node.js
- TypeScript
- [Google API Client Library](https://github.com/google/google-api-javascript-client)
- [Nodemailer](https://nodemailer.com/about/)
- [PDFKit](https://pdfkit.org/)

const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const sendInvoice = (order) => {
    const transporter = nodemailer.createTransport({
        host: 'mail20.mydevil.net',
        port: 587,
        secure: false,
        auth: {
            user: 'admin@navrot-szycie.pl',
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const { invoice } = order;

    // const products = order.product.map(item => {
    //     return ' ' + item.name;
    // });

    const orderNoFirstReplace = order.orderNo.replace('/', '')
    const orderNoSecondReplace = orderNoFirstReplace.replace('/', '')

    const options = {
        from: 'admin@navrot-szycie.pl',
        // to: 'navrot.szycie@gmail.com',
        to: `${invoice.email}`,
        subject: 'Potwierdzenie zamówienia - Navrot Szycie',
        text: `Faktura ze szczegółami zamówienia w załączniku.`,
        attachments: [
            { 
                filename: `Faktura${orderNoSecondReplace}.pdf`,
                path: `pdf/invoices/Faktura${orderNoSecondReplace}.pdf`
            }
        ]
    };

    transporter.sendMail(options, (err, info) => {
        if (err) console.log(`Nie udało się wysłać maila. Błąd: ${err}`)
        else console.log(`Wysłano maila ze szczegółami zamówienia do klienta`) 
    });
};

module.exports = sendInvoice;
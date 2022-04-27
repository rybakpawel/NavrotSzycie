const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const sendOrderEmail = (order) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'navrot.szycie@gmail.com',
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const products = order.items.map(item => {
        return ' ' + item.name;
    });

    const options = {
        from: 'navrot.szycie@gmail.com',
        to: 'navrot.szycie@gmail.com',
        subject: 'Nowe zamówienie na Navrot Szycie',
        text: `Szczegóły zamówienia:\n\n
            Produkty:${products}\n
            Dostawa: ${order.delivery.provider} / Punkt inpost: ${order.delivery.inpostPoint}\n
            E-mail: ${order.delivery.email}\n
            Imię i nazwisko: ${order.delivery.firstName} ${order.delivery.lastName}\n
            Adres: ${order.delivery.street} ${order.delivery.buildingNumber}/${order.delivery.flatNumber}, ${order.delivery.zipCode} ${order.delivery.city}\n
            Numer telefonu: ${order.delivery.phoneNumber}\n
            NIP: ${order.delivery.nip}\n
            Nazwa firmy: ${order.delivery.companyName}\n
            Potwierdzenie: ${order.delivery.confirmation}`
    };

    transporter.sendMail(options, (err, info) => {
        if (err) console.log(`Nie udało się wysłać maila. Błąd: ${err}`)
        else console.log(`Wysłano maila od ze szczegółami zamówienia`) 
    });
};

module.exports = sendOrderEmail;
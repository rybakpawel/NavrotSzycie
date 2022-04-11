const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const sendContactEmail = (email, message) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'navrot.szycie@gmail.com',
            pass: process.env.EMAIL_PASSWORD
        }
    })

    const options = {
        from: 'navrot.szycie@gmail.com',
        to: 'navrot.szycie@gmail.com',
        subject: 'Nowa wiadomość na Navrot Szycie',
        text: `Wiadomość wysłana z adresu: ${email}.\n\n ${message}`
    }

    transporter.sendMail(options, (err, info) => {
        if (err) console.log(`Nie udało się wysłać maila. Błąd: ${err}`)
        else console.log(`Wysłano maila od ${email}`) 
    })
};

module.exports = sendContactEmail;
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: 'lybutelkocmoca@mail.ru',
        pass: 'Prognozanet12'
        }
    },
    {
        from: 'Gare.g <lybutelkocmoca@mail.ru>'
    }
)

const mailer = message => {
    transporter.sendMail(message, (err, info) =>{
        if(err) return console.log(err)
        console.log('Email sent: ', info)
    })
}

module.exports = mailer
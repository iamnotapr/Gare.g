//serverForm
//server_express.js
//localhost:3001
const express = require('express')
const bodyParser = require('body-parser')
const mailer = require('./nodemailer')

const app = express()

const PORT = 3001
let user = undefined            

app.use(bodyParser.urlencoded({ extended: false}))
app.post('/gareg', (req, res) =>{
    if(!req.body.mail || !req.body.adres) return res.sendStatus(400)
    const message = {
        to: '<gare.g.official@gmail.com>',
        subject: 'Заказ',
        html:`
        <h2>Заказ Gare.g</h2>
        <i>данные:</i>
        <ul>
            <li>почта: ${req.body.mail}</li>
            <li>адрес: ${req.body.adres}</li>
            <li>товар: ${req.body.data}</li>
        </ul>`
    }
    mailer(message)
    user = req.body                                        
    res.redirect('/gareg')                        
    res.send('Спасибо за покупку, заказ будет доставлен в течении двух недель. Оплата при получении.')
})
app.get('/gareg', (req,res) => {
    if(typeof user !== 'object') return res.sendFile(__dirname + '/gr.html')
    res.send('Спасибо за покупку, заказ будет доставлен в течении двух недель. Оплата при получении.')
    user = undefined
})

app.listen(PORT, () => console.log(`server started at http://localhost:${PORT}/gareg`))
//server_start: node index.js
const express = require('express');
const nodemailer = require('nodemailer')
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors())

app.post('/mail',(req, res) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'edavelly.work@gmail.com',
            pass: 'pvfsxorduqcmbkir'
        }
    })  

    const mailOptions = {
        from: req.body.email,
        to: 'edavelly.work@gmail.com',
        subject: `Message from - ${req.body.email} - ${req.body.name}`,
        text: req.body.message,
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            res.send('success');
        }
    })
})

app.listen(5500, ()=>{
    console.log(`Server running Successfully!!`);
})
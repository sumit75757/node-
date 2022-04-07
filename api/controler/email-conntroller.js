
const nodemailer = require('nodemailer')
const emailmodel = require('../models/email')
exports.emailService = async (req, res) => {


    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ps9724946@gmail.com',
            pass: 'patel.sumit@97249#46850'
        }
    });

    const email =({
        from:'ps9724946@gmail.com',
        to: req.body.email,
        subject: req.body.subject,
        text: req.body.text
    });
    // to: 'patelsumit75757@gmail.com',
    // subject: 'Test mail',
    // text: 'Node.js email service'



    mailTransporter.sendMail(email, (err, data) => {
        if (err) {
            res.status(400).json({
                messge: 'email not sent',
                err,
                email
            })
            console.log('Error Occurs',email);
        } else {
            res.status(200).json({
                messge: 'email sent',
                data
            })
            console.log('Email sent successfully', data);
        }
    });
}
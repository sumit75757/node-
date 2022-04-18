const mongoos = require('mongoose');
const nodemailer = require('nodemailer')
const emailmodel = require('../models/email')
let mail;
let html = '<table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; min-width: 450px;"><tbody><tr><td style="text-align: center;"><img src="https://www.amangojariya.com/assets/img/apple-touch-icon.png" role="presentation" width="130" class="sc-cHGsZl bHiaRe" style="max-width: 130px; display: inline-block;"></td></tr><tr><td height="10"></td></tr><tr style="text-align: center;"><td><h3 color="#000000" class="sc-fBuWsC eeihxG" style="margin: 0px; font-size: 18px; color: rgb(0, 0, 0);"><span>Aman</span><span>&nbsp;</span><span>Gojariya</span></h3><p color="#000000" font-size="medium" class="sc-fMiknA bxZCMx" style="margin: 0px; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;"><span>IT</span></p><p color="#000000" font-size="medium" class="sc-dVhcbM fghLuF" style="margin: 0px; font-weight: 500; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;"><span>Angular devloper</span><span>&nbsp;|&nbsp;</span><span>AG Freelancer</span></p><p color="#000000" font-size="medium" class="sc-eqIVtm kRufpp" style="color: rgb(0, 0, 0); margin: 0px; font-size: 14px; line-height: 22px;"><span>thanks to contect us . we are contect you as soon as posible</span></p></td></tr><tr><td><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width: 100%;"><tbody><tr><td height="30"></td></tr><tr><td color="#f2547d" direction="horizontal" height="1" class="sc-jhAzac hmXDXQ" style="width: 100%; border-bottom: 1px solid rgb(242, 84, 125); border-left: none; display: block;"></td></tr><tr><td height="30"></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width: 100%;"><tbody><tr style="vertical-align: middle;"><td><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"><tbody><tr height="25" style="vertical-align: middle;"><td width="30" style="vertical-align: middle;"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"><tbody><tr><td style="vertical-align: bottom;"><span color="#f2547d" width="11" class="sc-jlyJG bbyJzT" style="display: block; background-color: rgb(242, 84, 125);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png" color="#f2547d" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(242, 84, 125);"></span></td></tr></tbody></table></td><td style="padding: 0px; color: rgb(0, 0, 0);"><a href="tel:+918128708189" color="#000000" class="sc-gipzik iyhjGb" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>+918128708189</span></a></td></tr><tr height="25" style="vertical-align: middle;"><td width="30" style="vertical-align: middle;"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"><tbody><tr><td style="vertical-align: bottom;"><span color="#f2547d" width="11" class="sc-jlyJG bbyJzT" style="display: block; background-color: rgb(242, 84, 125);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png" color="#f2547d" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(242, 84, 125);"></span></td></tr></tbody></table></td><td style="padding: 0px;"><a href="mailto:support@amangojariya.com" color="#000000" class="sc-gipzik iyhjGb" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>support@amangojariya.com</span></a></td></tr><tr height="25" style="vertical-align: middle;"><td width="30" style="vertical-align: middle;"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"><tbody><tr><td style="vertical-align: bottom;"><span color="#f2547d" width="11" class="sc-jlyJG bbyJzT" style="display: block; background-color: rgb(242, 84, 125);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png" color="#f2547d" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(242, 84, 125);"></span></td></tr></tbody></table></td><td style="padding: 0px;"><a href="https://www.amangojariya.com/" color="#000000" class="sc-gipzik iyhjGb" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>https://www.amangojariya.com/</span></a></td></tr><tr height="25" style="vertical-align: middle;"><td width="30" style="vertical-align: middle;"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"><tbody><tr><td style="vertical-align: bottom;"><span color="#f2547d" width="11" class="sc-jlyJG bbyJzT" style="display: block; background-color: rgb(242, 84, 125);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png" color="#f2547d" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(242, 84, 125);"></span></td></tr></tbody></table></td><td style="padding: 0px;"><span color="#000000" class="sc-csuQGl CQhxV" style="font-size: 12px; color: rgb(0, 0, 0);"><span>F-1214, 100 Feet Anand Nagar Rd Jodhpur Village, Ahmedabad,  Gujarat, India, 380015</span></span></td></tr></tbody></table></td><td width="15"><div></div></td><td style="text-align: right;"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width: 100%;"><tbody><tr><td><img src="https://www.amangojariya.com/assets/img/logo.png" role="presentation" width="130" class="sc-cHGsZl bHiaRe" style="max-width: 130px; display: inline-block;"></td></tr><tr><td height="10"></td></tr><tr><td><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; display: inline-block;"><tbody><tr style="text-align: right;"><td><a href="https://www.facebook.com/aman.patel.1449" color="#6a78d1" class="sc-hzDkRC kpsoyz" style="display: inline-block; padding: 0px; background-color: rgb(106, 120, 209);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png" alt="facebook" color="#6a78d1" height="24" class="sc-bRBYWo ccSRck" style="background-color: rgb(106, 120, 209); max-width: 135px; display: block;"></a></td><td width="5"><div></div></td><td><a href="https://twitter.com/AmanGojariya" color="#6a78d1" class="sc-hzDkRC kpsoyz" style="display: inline-block; padding: 0px; background-color: rgb(106, 120, 209);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png" alt="twitter" color="#6a78d1" height="24" class="sc-bRBYWo ccSRck" style="background-color: rgb(106, 120, 209); max-width: 135px; display: block;"></a></td><td width="5"><div></div></td><td><a href="https://www.linkedin.com/in/aman-gojariya/" color="#6a78d1" class="sc-hzDkRC kpsoyz" style="display: inline-block; padding: 0px; background-color: rgb(106, 120, 209);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png" alt="linkedin" color="#6a78d1" height="24" class="sc-bRBYWo ccSRck" style="background-color: rgb(106, 120, 209); max-width: 135px; display: block;"></a></td><td width="5"><div></div></td><td><a href="https://www.instagram.com/aman_gojariya/" color="#6a78d1" class="sc-hzDkRC kpsoyz" style="display: inline-block; padding: 0px; background-color: rgb(106, 120, 209);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png" alt="instagram" color="#6a78d1" height="24" class="sc-bRBYWo ccSRck" style="background-color: rgb(106, 120, 209); max-width: 135px; display: block;"></a></td><td width="5"><div></div></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width: 100%;"><tbody><tr><td height="30"></td></tr><tr><td color="#f2547d" direction="horizontal" height="1" class="sc-jhAzac hmXDXQ" style="width: 100%; border-bottom: 1px solid rgb(242, 84, 125); border-left: none; display: block;"></td></tr><tr><td height="30"></td></tr></tbody></table></td></tr><tr><td style="text-align: center;"><a href="https://www.hubspot.com/email-signature-generator?utm_source=create-signature" target="_blank" rel="noopener noreferrer" class="sc-gisBJw kDlVKO" style="font-size: 12px; display: block; color: rgb(0, 0, 0);">Create Your Own Free Signature</a></td></tr></tbody></table>'
exports.emailService = async (req, res) => {


    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ps9724946@gmail.com',
            pass: 'patel.sumit@97249#46850'
        }
    });
    const email =({
        from: req.body.userEmail,
        username:req.body.name,
        to: 'ps9724946@gmail.com',
        subject: req.body.subject,
        text: '',
        amp: html,
        html: `${req.body.text}`,
    });
    console.log(email);
         mail = new emailmodel({
        _id: new mongoos.Types.ObjectId(),
        from: req.body.userEmail,
        username:req.body.name,
        to: 'ps9724946@gmail.com',
        subject: req.body.subject,
        text: '',
        html:  req.body.text+"<h2>For clients that do not support AMP4EMAIL or amp content is not valid</h2>",
        amp: req.body.text
    });
    const clintEmail =({
        from: 'ps9724946@gmail.com',
        username:req.body.name,
        to: req.body.userEmail,
        subject: req.body.subject,
        text: '',
        amp: html,
        html: html,
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
            // saveEmail(res);

            console.log('Error Occurs',email);
        } else {
            res.status(200).json({
                messge: 'email sent',
            })
            saveEmail();
            console.log('Email sent successfully', data);
           
        }
    });
    // send to clint
    mailTransporter.sendMail(clintEmail, (err, data) => {
        if (err) {
            res.status(400).json({
                messge: 'email not sent',
                err,
                email
            })
            // saveEmail(res);

            console.log('Error Occurs',email);
        } else {
            res.status(200).json({
                messge: 'email sent',
            })
            saveEmail();
            console.log('Email sent successfully', data);
           
        }
    });
   
}
// function saveEmail(res:anu){
//     mail.save().then(result => {
//         res.status(201).json()

//     }).catch(err=>  {
//       res.status(500).json(err.errors)
//     });
// }
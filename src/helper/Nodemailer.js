const nodemailer=require('nodemailer');
const dotenv=require('dotenv');

dotenv.config();

const sendMail=(email,mailsubject,body)=>{
    const mailData={
        from:process.env.MyEMAIL,
        to:email,
        subject:mailsubject,
        text:body,
    }
const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.MyEMAIL,
        pass:process.env.MYPASS||'',
    },
});

transporter.sendMail(mailData,async(err,info)=>{
    if (err) {
        console.log(err)
        return false;
    }
    else{
        console.log('Mail sent')
        return true;
    }
});
return true;
};

module.exports={sendMail};
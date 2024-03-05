const { Request, Response } = require('express');
const {Leavedata} =require('../Models/Leave')
const { sendMail } = require('../helper/Nodemailer');

const apply_leave = async (req, res) => {
    const data = req.body;

    try {
        const addLeave = new Leavedata(data);
        console.log("Leave application added:", addLeave);
        await addLeave.save();

        // Send email to admin
        const emailSubject = 'Leave Application';
        const emailBody = `Leave application from ${data.username}:\nReason: ${data.reason}`;
        const adminEmail = 'rajputharshit37@gmail.com'; // Replace with the admin's email
        const emailSent = await sendMail(adminEmail, emailSubject, emailBody);

        if (emailSent) {
            res.status(201).json(addLeave);
        } else {
            res.status(500).send('Error sending email to admin');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding leave application');
    }
};

module.exports = { apply_leave };

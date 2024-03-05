
const bcrypt=require('bcrypt');
const {sign}=require('jsonwebtoken');
const dotenv=require('dotenv');
const { Employer } = require('../Models/Employer');
const { Admin } = require('../Models/Admin');
dotenv.config();
const accessSecret=process.env.ACCESS_SECRET ||'';
//LOGIN FUNCTIONALITY

const userprofile={
    username:String,
    email:String,
    password:String,
}
const login=async(req,res)=>{
    const {username,password}=req.body;

    //validate user input
    if(!username ||!password)
    {
        res.status(400).send('missing username or password');
        return ;
    }
    //find user from database
    let user=await Employer.findOne({username});
    if (!user) {
        console.log("searching for Admin",req.body );
        user=await Admin.findOne({username});
    }
    if(!user)
    {
        res.status(400).send('user not found');
        return;
    }
    // compare with email with email from the database
    if(user.email!=req.body.email)
    {
        res.status(400).send('Invalid email');
    }
    //check password
    const validPassword=await bcrypt.compare(password,user.password);
    if (!validPassword) {
        res.status(400).send('Invalid password')
    }

    const accesstoken=sign({id:user._id,role:user.role},accessSecret);
    res.cookie('accesstoken', accesstoken, { httpOnly: true, secure: true });


    //send token in header
    res.header('Authorization',`Bearer ${accesstoken}`)
    console.log('user logged in');
    res.status(200).json({user,accesstoken});

}
module.exports=login;


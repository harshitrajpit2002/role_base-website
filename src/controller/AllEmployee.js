const {Request,Response}=require('express');
const {Employer} =require('../Models/Employer');

const allEmployer=async(req,res)=>{
    try {
        const employee=await Employer.find();
        res.status(200).json({employee})
    } catch (error) {
        res.status(500).send("error fetching course");
    }
}
module.exports={allEmployer};
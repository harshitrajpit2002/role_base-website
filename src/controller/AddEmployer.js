const {Request,Response}=require('express');
const {Employer}=require('../Models/Employer');

const addEmployer=async(req,res)=>{
    const employe_data=req.body;
    console.log("data agya");
    console.log(req.data);
    try {
        const addEmploy=new Employer(employe_data);
        console.log("employer added",addEmploy);
        await addEmploy.save();
        res.status(201).json(addEmploy);
    } catch (error) {
        res.status(500).send("error adding employee");
    }
}
module.exports={addEmployer};
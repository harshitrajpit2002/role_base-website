const {Request,Response}=require('express');
const {Employer}=require('../Models/Employer');

const  removeEmployer=async(req,res)=>{
    const {id}=req.params;

    try {
        const employe=await Employer.findByIdAndDelete(id);
        if (!employe) {
            return res.status(404).send("employer not found");
        }
        res.status(200).send("employer remover succesfully")
    } catch (error) {
        console.log("error removing employer",error)
    }
}
module.exports={removeEmployer};
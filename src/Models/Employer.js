const mongoose=require('mongoose');

const EmployerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,

    },
    password:{  
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
    },
    salary:{
        type:String
    }

})
const Employer=mongoose.model('Employee',EmployerSchema);
module.exports={Employer};
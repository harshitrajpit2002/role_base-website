const mongoose=require('mongoose');
const leaveSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    leave:{
        type:Number,
        required:true,
    },
    reason:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
    }
})
const Leavedata=mongoose.model('Leave',leaveSchema);
module.exports={Leavedata};
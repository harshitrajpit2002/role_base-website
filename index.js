const express=require('express');
const dotenv=require('dotenv');
const cookieParser = require('cookie-parser');
const {router}=require('./src/Router/routes');
const cors = require('cors');
const { connectToDatabase } = require('./src/utils/DatabaseConnection');
dotenv.config();
const app=express();
app.use(cors({
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use('/',router);

app.get('/',(req,res)=>{
    res.status(200).send("hello");
})

app.listen(4000,async()=>{
    await connectToDatabase();
    console.log("server get started");
});

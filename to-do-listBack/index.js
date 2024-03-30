import express from "express";
import cors from "cors";
import db from "./ConnectDB/db.js";
import dotenv from 'dotenv';
// import authRoute from "./Routes/authRoute.js";
import bcrypt from 'bcrypt';
import userSchema from './Models/userSchema.js';

const app = express();
dotenv.config();
// MongoDatabase connect
db();

//ConnectRoute
app.use(express.json());
app.use(cors());
// app.use("/", authRoute);


app.get('/',(req,res)=>{
    res.send("<h1>Welcome to backend page todolist</h1>");
});


//API's

//SIGNUP API
app.post('/register', async (req,res)=>{
    try {
        const saltRounds = 10;
        const{name,email,password,phone,gender} =req.body;
        const hashpswd = await bcrypt.hash(password, saltRounds);
        const user = new userSchema({name, email, password : hashpswd , phone, gender});
        // console.log(user);
        await user.save().then(()=>{
            res.status(200).json({user:user});
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send(
            {
                success:false,
                message:'Error in registeration',
                error
            }
        )
    }
});

//Singin

app.post('/login',async (req,res)=>{
    try {
        const{email,password} =req.body;
        const user = await userSchema.findOne({email:email, password:password});
        console.log(user);
        if(!email || !password){
            return res.status(404).send(
            {
                success:false,
                message:'Invaild email or password',
                error
            }
        )}else{
            return res.status(200).send( req.body);
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send(
            {
                success:false,
                message:'Error in login',
                error
            }
        )
        
    }
//    const user = await userSchema.findOne(req.body);
//    console.log(user);
//    res.send(user);
})

const port = process.env.Port || 8000;
app.listen(port, () =>{
    console.log("Server Running");
})
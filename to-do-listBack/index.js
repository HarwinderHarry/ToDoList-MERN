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

app.post('/login', async (req,res)=>{
    try {
        const{email,password} =req.body;
        if(!email || !password){
            return res.status(400).send("Please Add the correct details");
        }
        const userMatch = await userSchema.findOne({email:email});
        // console.log(userMatch);
        if(userMatch){
            const passMatch = await bcrypt.compare(password,userMatch.password);
            if(!passMatch){
                return res.status(400).send("Invaild Credentials");
            }else{
                return res.status(200).send("Login Successfully");
            }
        }else{
            return res.status(400).send("Invaild Credentials 2");
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
});

const port = process.env.Port || 8000;
app.listen(port, () =>{
    console.log("Server Running");
})
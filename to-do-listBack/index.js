import express from "express";
import db from "./ConnectDB/db.js";
import dotenv from 'dotenv';

const app = express();
dotenv.config();
// MongoDatabase connect
db();


app.get('/',(req,res)=>{
    res.send("<h1>Welcome to backend page todolist</h1>");
});


const port = process.env.Port || 8000;
app.listen(port, () =>{
    console.log("Server Running");
})
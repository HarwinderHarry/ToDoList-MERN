import express from "express";
import db from "./ConnectDB/db.js";
import dotenv from 'dotenv';
import authRoute from "./Routes/authRoute.js";

const app = express();
dotenv.config();
// MongoDatabase connect
db();

//ConnectRoute
app.use(express.json());
app.use("/", authRoute);


app.get('/',(req,res)=>{
    res.send("<h1>Welcome to backend page todolist</h1>");
});


const port = process.env.Port || 8000;
app.listen(port, () =>{
    console.log("Server Running");
})
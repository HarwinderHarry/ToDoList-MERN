import express from "express";
import cors from "cors";
import db from "./ConnectDB/db.js";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
// import jwt from  "jsonwebtoken";
import bodyParser from "body-parser";
import userSchema from "./Models/userSchema.js";


// const SECRET_KEY = "jwt-secretkey";
const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// MongoDatabase connect
db();

//ConnectRoute
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("<h1>Welcome to backend page todolist</h1>");
});

//API's

//SIGNUP API
app.post("/register", async (req, res) => {
  try {
    const saltRounds = 10;
    const { name, email, password, phone} = req.body;
    const UserExist = await userSchema.findOne({ email});
    if (UserExist) {
      return res.status(400).send("User Already Exist");
    }
    const hashpswd = await bcrypt.hash(password, saltRounds);

    let data = userSchema();

    data.name = name;
    data.email = email;
    data.password = hashpswd;
    data.phone = phone;

    let result = await data.save();

    res.status(200).json({ result: result});
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registeration",
      error,
    });
  }
});

//Singin

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Please Add the correct details");
    }
    const userMatch = await userSchema.findOne({ email: email });
    // console.log(userMatch);
    if (userMatch) {
      const passMatch = await bcrypt.compare(password, userMatch.password);
      if (!passMatch) {
        return res.status(400).send("Incorrect email or password..!!");
      } else {
        // const token = jwt.sign({userMatch}, SECRET_KEY, {expiresIn: '1hr'}, (err, token)=>{
        //   if(err){
        //     res.status(400).send("token not found");
        //   }
        //   res.status(200).send({userMatch , myToken : token});
        // })
        return res.status(200).send("Login Successfully");
      }
    } else {
      return res.status(400).send("Invaild Credentials");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
});

//Signout



const port = process.env.Port || 8000;
app.listen(port, () => {
  console.log("Server Running");
});

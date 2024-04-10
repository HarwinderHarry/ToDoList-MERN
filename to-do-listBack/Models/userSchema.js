import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true,
        trime: true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    }
}, {timestamps:true})

export default mongoose.model('users', userSchema);
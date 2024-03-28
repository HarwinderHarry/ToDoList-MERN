import express from 'express';
import userSchema from '../Models/userSchema.js';

//router onject
const router = express.Router();

//rounting
//Signin || method post
export const registerController = async(req,res) =>{
    try {
        const{name,email,password,phone,gender} =req.body;
        const user = userSchema({name,email,password,phone,gender});
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
 };

export default router;
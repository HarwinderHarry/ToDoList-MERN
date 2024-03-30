import express from 'express';
import bcrypt from 'bcrypt';
import userSchema from '../Models/userSchema.js';

//router onject
const router = express.Router();

//rounting
//Signup || method post
router.post('/register', async (req,res)=>{
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

router.post('/login', async (req,res)=>{
    try {
    //    const {email, password} = req.body;
       const user = await userSchema.findOne(req.body);
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
                message:'Error in registeration',
                error
            }
        )
    }


});

export default router;
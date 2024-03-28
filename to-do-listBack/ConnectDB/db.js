import mongoose from "mongoose";

const db = async () =>{
    try{
        const conn = await mongoose.connect(process.env.Mongo_URL);
        console.log(`Server connected`);
    }
    catch(err){
        console.log(`Error ${err}`);
    }
}

export default db;

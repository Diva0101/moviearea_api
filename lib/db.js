import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const dbConnect = async ()=>{
    try{
        await mongoose.connect(
            process.env.MONGODB_URI
        );
        console.log("db connected success");
    } catch(e){
        console.error(e.message)
    }
    
}

export default dbConnect;
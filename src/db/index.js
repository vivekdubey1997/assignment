import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from 'dotenv'

dotenv.config()
const MONGO_URI = process.env.DATABASE_URL 
console.log(MONGO_URI)



 const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(MONGO_URI)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB
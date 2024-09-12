import dotenv from "dotenv"
import {app} from './app.js'
import connectDB from "./db/index.js"
import mongoose from "mongoose"
dotenv.config({
  
})

connectDB()
app.listen(process.env.PORT || 8000, () => {
    console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
})




import connectDb from "./DB/dbConnect.js";
import 'dotenv/config' 
import { app } from "./app.js";
import dotenv from "dotenv";
dotenv.config({
    path : './env'
})

connectDb().then(()=>{
    app.listen(process.env.PORT || 4000)
}).catch((err)=>{
    console.log("MongoDb Conection Error")
})

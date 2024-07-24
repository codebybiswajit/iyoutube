import connectDb from "./DB/dbConnect.js";
// import { configDotenv } from "dotenv";
// require('dotenv').config( path : '/.env')
import dotenv from 'dotenv'
dotenv.config({
    path:'./env'
})
connectDb()

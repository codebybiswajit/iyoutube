import mongoose from "mongoose";


import {DB_NAME} from '../constant.js'

import 'dotenv/config' 
const connectDb = async()=>{
    try {
        const mongodbInstanceResponse = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`Mongo Db Connected \n${mongodbInstanceResponse.connection.host}`)

    } catch (error) {
        console.error("Error",error)
        process.exit(1)
        throw error
    }
}

export default connectDb
import { model } from "mongoose"
import mongoose,{Schema} from 'mongoose'

const twitteSchema = new Schema({
    // avtar : {
    //     type : String,
    //     required  :true
    // },
    twitte : {
        type  :String,
        required : true

    }
    ,madeby : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    }
},{timestamps : true})

export const Twitte = model('Twitte',twitteSchema)
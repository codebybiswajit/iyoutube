import { model } from "mongoose"
import mongoose,{Schema} from 'mongoose'

const CommentSchema = new Schema({
    video : {
        type: Schema.Types.ObjectId,
        ref: 'Video'
    },
    twitte : {
        type: Schema.Types.ObjectId,
        ref: 'Twitte'
    },
    doneBy : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comment : {
        type : String,
        required  : true
    }
},{timestamps : true})

export const Comment = model('Comment',CommentSchema)
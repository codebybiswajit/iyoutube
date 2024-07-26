import { model } from "mongoose"
import mongoose,{Schema} from 'mongoose'

const likesSchema = new Schema({
    video: {
        type: Schema.Types.ObjectId,
        ref: 'Video'
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    },
    owner : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    twitte : {
        type: Schema.Types.ObjectId,
        ref: 'Twitte'
    }
},{timestamps : true})

export const Likes = model('Likes',likesSchema)
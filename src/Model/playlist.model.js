import { model } from "mongoose"
import mongoose, { Schema } from 'mongoose'

const playlistSchema = new Schema({
    videos: {
        type: Schema.Types.ObjectId,
        ref: 'Video'
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name : 
    {
        type : String,
        required : true
    },
    desc : {
        type  : String,
        
    }
}, { timestamps: true })

export const Playlist = model('Playlist', playlistSchema)
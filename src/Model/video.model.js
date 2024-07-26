import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema({
    // vId :{
    //     type : String,
    //     unique : true,
    //     required : true
    // },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Users'
    },
    v_Name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    duration : {
        type : String,
        required : true
    },
    views : {type : String,
        required : true},
    isPublished :{
        type : Boolean,
        required : true
    },
    thumbnail  : {
        type : String,
        required : true
    },
    videoFile : {
        type : String,
        required : true
    }
},{timestamps : true})

videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model('Video',videoSchema)
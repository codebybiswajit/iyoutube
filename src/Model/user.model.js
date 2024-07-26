import mongoose from "mongoose";
import bcrypt from'bcrypt';
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    // userId: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    watchHistory: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Video'
    }],
    userName: {
        type : String,
        unique:[true,"mustbe unique"],
        required : true,
        lowercase : true,
        index : true,
        trim : true
    },
    email: {
        type : String,
        required : true,
        lowercase : true,
        trim : true
    },
    fullName: {
        type : String,
        required : true,
        trim : true
    },
    avatar: {
        type : String,
        required : true
    },
    coverImage: {
        type : String,
        // required : true
    },
    password: {
        type : String,
        unique : true,
        required : true,
        lowercase : true
    },
    refreshToken: {
        type : String
    }
}, { timestamps : true })

userSchema.pre('save' , async function (next) {
    if (this.isModified(password)) {
        this.pas
sword = bcrypt.hash(this.password,50)
        next()
    }else
    next()
})

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password,this.password)
}


userSchema.methods.generateAccessToken = function()
{
    jwt.sign({
        _id : this._id,
        email : this.password,
        fullName : this.fullName,
        userName : this.userName
    },process.env.ACCESS_TOKEN_SECRET(
        expiresIn = process.env.ACCESS_TOKEN_EXPIRY 
    ))
}
userSchema.methods.generateRefreshToken = function()
{
    jwt.sign({
        _id : this._id,
    },process.env.REFRESH_TOKEN_SECRET(
        expiresIn = process.env.REFRESH_TOKEN_EXPIRY 
    ))
}

export const User = mongoose.model('User', userSchema)
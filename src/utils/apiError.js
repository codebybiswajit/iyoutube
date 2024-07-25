import { Error } from "mongoose"

class apiError extends Error {
    constructor(
        statusCode,
        message = "something went wrong",
        errors = [],
        stack = ""
        
    ){
        super(message)
        this.errors = errors
        this.message(message)
        this.data(null)
        this.statusCode = statusCode
        this.success = false

        if (stack) {
            this.stack =this.stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {apiError}
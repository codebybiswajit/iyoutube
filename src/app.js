import express from "express"
const app = express()
import cors from 'cors'
import cookieParser from "cookie-parser"

app.use(cors({
    origin  : process.env.CORS_ORIGIN,
    credentials : true
}))
app.use(express.json({limit : "20kb"}))
app.use(express.urlencoded({extended : true,limit : "20kb"}))
app.use(express.static('public'))
app.use(cookieParser())
app.get('/response',(req,res) =>{
    res.send('hello')
})
app.listen()


export {app}
const express=require("express")
const {connection}=require("./db")
require('dotenv').config()
const app=express()
app.use(express.json())


//↓↓↓↓↓↓↓↓ -- demo-- ↓↓↓↓↓↓↓↓
app.get("/",(req,res)=>{
    res.send("HOME")
})
//↑↑↑↑↑↑↑↑ -- demo-- ↑↑↑↑↑↑↑↑↑

const port=process.env.PORT||4500
app.listen(port,async()=>{
    try {
        await connection
        console.log(`connected to mongoDB`);
    } catch (error) {
        console.log(error);
    }
    console.log(`http://localhost:${port}`);
})
const express=require("express");
const {connection}=require("./db")
const {userRouter}=require("./routes/user.routes")
const {noteRouter}=require("./routes/note.route")
const {authenticate}=require("./middlewares/authenticate.middleware")
const cors=require("cors")
require("dotenv").config()
const app=express();
app.use(express.json());
app.use(cors())

app.use("/users",userRouter)
app.use(authenticate)
app.use("/notes",noteRouter)

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("CONNECTED TO DB")
    }catch(err){
        console.log(err)
    }
    console.log("server is running")
})
const express = require("express")
const mongoose = require("mongoose")
require('dns').setServers(['8.8.8.8', '1.1.1.1']);//imp


const User = require("./mode/user")


const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("home")
})

//curd operaction 

//create opraction
app.post("/api/user",async (req,res)=>{
    try {
        const data = await User.create(req.body)
        res.json({errors:false,data:data})

    } catch (error) {
       res.status(500).json({errors:true,message:error.message}) 
    }
})

//read oreaction
app.get("/api/user",async (req,res)=>{
    try {
        const data = await User.find()
        res.json({errors:false,data:data})
    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
})

//update operaction
app.put("/api/user/:id",async (req,res)=>{
    try {
        const data = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({errors:false,data:data})

    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
})

//delet operaction

app.delete("/api/user/:id",async (req,res)=>{
    try {
        const data = await User.findByIdAndDelete(req.params.id)
        res.json({errors:false,data:data})

    } catch (error) {
        res.status(500).json({errors:true,message:error.message})
    }
})


app.listen(5000,()=>{
    console.log("port is leasten");  
})


function db() {
    mongoose.connect("mongodb+srv://ritesh:ritesh@cluster0.dezgpj9.mongodb.net/test").then(res=>{
        console.log(res.STATES.connected);
    },err=>{
        console.log(err.message);
    })
}

db()
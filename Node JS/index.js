import { log } from "console"
import mongoose from "mongoose"
import express from "express"
import fs from 'fs'
import path from "path"
import cookieParser from "cookie-parser"

//database setup

mongoose.connect("mongodb://localhost:27017",{
    dbName: "BackendPractice",
})
.then(()=>(console.log("database connected")))
.catch((e)=>console.log("error occured"))

const messageSchema = new mongoose.Schema({
    name:String,
    email:String,
})

const mesge = new mongoose.model("message", messageSchema)


//server creation
const app = express()

//middleware
app.use(express.static(path.join(path.resolve(), "public")))
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


//routes or API
app.get("/", (req,res)=>{
    const {token} = req.cookies;
    if(token){
        res.render("logout.ejs")
    }else{
        res.render("login.ejs")
    }    
})

app.get("/logout", (req, res)=>{
    res.cookie("token", "null",{
        expires: new Date(Date.now()),
    })
    res.redirect("/")
})


app.post("/login", (req, res)=>{
    res.cookie("token", "iamin",{
        httpOnly: true,
        expires: new Date(Date.now()+ 60*1000),
    });
    res.redirect("/")
})



// app.post("/", async (req,res)=>{
//     const {name, email} = req.body;
//     await mesge.create({name,email})
//     res.render("success.ejs")
// })

app.listen(5000, ()=>{
    console.log("Server is working!!");
})














// const home = fs.readFileSync("./index.html");
// console.log(home);

// console.log("what is happening")
// const server = http.createServer((req, res)=>{
//  if(req.url === '/'){
//     res.end(home);
//  }
//  else if(req.url === '/about'){
//     res.end("About");
//  }
//  else if(req.url === '/contact'){
//     res.end("Contact");
//  }
//  else{
//     res.end("Page does not exist");
//  }

// })

// server.listen(5000,()=>{
//     console.log("Server is working");
// })

import express from "express";
import path from "path"


const app = express();
app.use(express.static(path.join(path.resolve(),"public")))

app.get("/", (req,res)=>{
    res.json({
        name: "dkfnldsa",
        roll: 232
    })
})

app.listen(5000,()=>{
    console.log("server created..");
})

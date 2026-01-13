import express from "express";
import cors from 'cors'
import middleware from "./rate_limit.js";
const app=express();
app.use(express.json())
app.use(middleware)

app.use(cors());
app.post("/",(req,res)=>{
    const id=req.body.key;
    res.json({message:"request successfull"})
})

app.listen(3000);

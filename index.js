import express from 'express';
import path from "path";
import mongoose from "mongoose"

mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.5",{
    dbName:"Exercise",  
})
.then(()=>console.log("Database Connected"))
.catch((e)=>console.log(e));

const messageSchema=new mongoose.Schema({
    name:String,
    email:String
});

const back2=mongoose.model("back2",messageSchema)

const app=express();


//Using middlewares
app.use(express.static(path.join(path.resolve(),"public")));
app.use(express.urlencoded({extended:true}));   //to access data from form

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index",{name:"Singh"});
    // res.sendFile("index.html");
});

app.get("/success",(req,res)=>{
    res.render("success");
    // res.sendFile("index.html");
});

app.post("/contact",async(req,res)=>{
    // console.log(req.body)
    const {name,email}=req.body;
    await back2.create({name,email})
    res.redirect("/success");

});

app.get("/users",(req,res)=>{
    res.json({
        users
    });
})

app.get("/add",async(req,res)=>{
    await back2.create({name:"Abhi2",email:"aa2@gmail"}).then(()=>{
        res.send("Nice");
    });
});

app.listen(5000,()=>{
    console.log("Sever is working")
});
import express from "express";
import path from "path";
import { fileURLToPath } from "url"; 

const app = express();
const port = 3000;

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.listen(port , () => {
    console.log(`connected to port ${port}`);
})

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "/views"));


app.get("/" , (req,res)=>{
    res.render("home.ejs");
});

app.get("/help" , (req,res)=>{
    res.render("home.ejs");
});

app.get("/rolldice" , (req,res)=>{
    let dice = Math.floor(Math.random() * 6) + 1;
    res.render("home.ejs" , { dice });
});

app.get("/ig/:username" , (req,res)=>{
    let Followers = ["ajit" , "amit" , "anil" , "apple"]
    let {username} = req.params;
    res.render("insta.ejs" , {username , Followers});
});
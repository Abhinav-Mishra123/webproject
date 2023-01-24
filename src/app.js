const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const staticcpath = path.join(__dirname,"../public")
const hbs = require("hbs");
const partialsPath = path.join(__dirname,"../views/partials");
// console.log(partialsPath);
const imgpath = path.join(__dirname,"../public/img")
app.use(express.static(staticcpath));
app.use(express.static(imgpath));


app.set('view engine', 'hbs');
app.set("views", "views")
hbs.registerPartials(partialsPath)

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/weather",(req,res)=>{
    res.render("weather");
})

app.get("*",(req,res)=>{
    res.render("404error",{
        errorMessage:"OOps page Not Found"
    });
})
app.listen(PORT);



const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs')
// require("./db/conn");
const User = require('./models/userScema')
// const users = require('./user.json');

const mongoose = require('mongoose');
const DB = "mongodb+srv://Satya123:Satya123@cluster0.3uzyb.mongodb.net/mrnstack?retryWrites=true&w=majority"

mongoose.connect(DB)
.then(()=>{
    console.log("Connect successfull")
}).catch((err)=>{
    console.log("Error" + err)
})


function logger(req,res, next){
    console.log(`calling ${req.method} to ${req.url}`);
    next();
    console.log(`calling ${req.method} to ${req.url} sucessfully`)
}


const port = process.env.PORT || 8000 ;
const static_path = path.join(__dirname, "../public")
// const views_path = path.join(__dirname, "../templets/views");
// const partials_path = path.join(__dirname, "../templets/components")



app.use(express.static(static_path));

// app.set("view engine", "hbs");
// app.set("views", views_path)
// hbs.registerPartials(partials_path)
// console.log(path.join(__dirname, "../public"))
app.get('/', (req, res) => {
    res.send("hello satya")
});

app.get('/tasks', (req, res) => {
    res.render('index')
});


app.post("/task", [logger,express.json()],(req,res)=>{
    console.log("inside post/users")
   
    res.json(req.body);
   
})


app.listen(port,()=>{
    console.log("listening on port successfully and port is " + port)
})
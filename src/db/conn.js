const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Employ",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
}).then(()=>{
    console.log("Connect successfull")
}).catch((err)=>{
    console.log("Error" + err)
})
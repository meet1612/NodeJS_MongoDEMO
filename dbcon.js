const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/employee",{ useNewUrlParser:true},function(err){
    if(err){
        console.log("error");
    }
    else{
        console.log("thai gyu");
    }
});
module.exports = mongoose;
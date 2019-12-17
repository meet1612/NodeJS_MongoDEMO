const db = require('../dbcon');

const schema = db.Schema({
    "eid":Number,
    "name":String,
    "email":{
        type:String,
        require:true
    },
    "salary":Number
});

module.exports = db.model('emps',schema);
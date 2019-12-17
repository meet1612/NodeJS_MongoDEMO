const db = require('../dbcon');

const schema = db.Schema({
    "did":String,
    "dname":String,
    "dlocation":String
});

module.exports = db.model('departments',schema);
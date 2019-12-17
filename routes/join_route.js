const express = require('express');
const emp = require("../models/emp_model");
const dept= require("../models/department_model");
const router = express.Router();


router.get('/',function(req,res,next){

    dept.aggregate([
        {
            $lookup:
            {
                from:"emps",
                localField:"dname",//dept table
                foreignField:"dname",//emp table
                as:"Dept_emp"
            }
        }
    ],function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });


});


module.exports=router;
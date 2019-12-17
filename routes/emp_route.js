const express = require('express');
const emp = require("../models/emp_model");
const dept= require("../models/department_model");
const router = express.Router();

/*router.get('/',(req,res)=>{
    emp.find()
    .then(doc=>{
        res.send(doc);
    })
    .catch(err=>{
        res.send(err);
    });
});*/
router.get('/',(req,res)=>{
    emp.find().sort({"salary":-1}).limit(2)      // 1 for asc and -1 for dec
    .then(doc=>{
        res.send(doc);
    })
    .catch(err=>{
        res.send(err);
    });

    
});


router.get('/:id',(req,res)=>{
    emp.findById(req.params.id)
    .then(doc=>{
        res.send(doc);
    })
    .catch(err=>{
        res.send(err);
    });
});

router.post('/',(req,res)=>{
    let empmodel = new emp(req.body);
    empmodel.save()
    .then(doc=>{
        res.send(doc);
    })
    .catch(err=>{
        res.send(err);
    });
});

router.delete('/:id',(req,res)=>{
    if(req.params.id){
        emp.remove({"_id":req.params.id})
        .then(doc=>{
            res.send(doc);
        })
    }else{
        res.send("jaruri che id");
    }
});

router.put('/:id',(req,res)=>{
    if(req.params.id){
        emp.findByIdAndUpdate({"_id":req.params.id},req.body)
        .then(doc=>{
            res.send(doc);
        })
    }else{
        res.send("jaruri che id");
    }
})
module.exports = router;
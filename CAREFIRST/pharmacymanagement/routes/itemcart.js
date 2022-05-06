const express =require('express');
const ItemCarts=require('../models/itemcart');

const cartrouter = express.Router();
const { json } = require('body-parser');
const { application } = require('express');

//save items
cartrouter.post('/cartitem/save',(req,res)=>{
    let newCartitem =new ItemCarts(req.body);
                                          //to access front end data
    newCartitem.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:"Item saved successfully"
        });
    });
});




//get items

cartrouter.get('/cartitems',(req,res)=>{
   ItemCarts.find().exec((err,cartitems)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingCartitems:cartitems
        });
    });
});

//delete item
cartrouter.delete('/cartitem/delete/:id',(req,res)=>{
    ItemCarts.findByIdAndRemove(req.params.id).exec((err,deletedCartitem)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccssfull",err
        });
        return res.json({
            message:"Delete Successfull", deletedCartitem
        });
    });
});

   
 
 









   

module.exports=cartrouter;
const express=require('express');
const Suppliers=require('../models/receives')

const router= express.Router();


//save posts
    router.post('/receive/save',(req,res)=>{

        let newReceive=new Receives(req.body);

        newReceive.save((err)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                     success:"Stock saved succesfully"
            });
        });
     });

//get posts

     router.get('/receive/',(req,res)=>{
         Suppliers.find().exec((err,receives)=>{
             if(err){
                 return res.status(400).json({
                       error:err
                 });
             }
             return res.status(200).json({
                       success:true,
                       existingSuppliers:receives
             });
         });
     });


//update  employee


    router.put('/receives/update/:id',(req,res)=>{
        Suppliers.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body
            },
            (err,Receives)=>{
                if(err){
                    return res.status(400).json({error:err})
                }
                return res.status(200).json({
                    success:"updated successfully"
                });
            }
        );
    });

    //delete employee

    router.delete('/receives/delete/:id',(req,res)=>{
        Suppliers.findByIdAndRemove(req.params.id).exec((err,deletedReceive)=>{
            if(err) return res.status(400).json({
                 message:'deleted unsuccessful',err
            });

            return res.json({
                message:"deleted succesfull",deletedReceive
            });
        });
    }
    );








     module.exports=router;
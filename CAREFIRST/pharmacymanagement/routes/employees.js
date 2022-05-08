const express=require('express');
const Employees=require('../models/employees')

const router= express.Router();


//save posts
    router.post('/employee/save',(req,res)=>{

        let newEmployee=new Employees(req.body);

        newEmployee.save((err)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                     success:"employee saved succesfully"
            });
        });
     });

//get posts

     router.get('/employees/',(req,res)=>{
         Employees.find().exec((err,employees)=>{
             if(err){
                 return res.status(400).json({
                       error:err
                 });
             }
             return res.status(200).json({
                       success:true,
                       existingEmployees:employees
             });
         });
     });
//get a specific employee

  router.get('/employee/:id', (req,res)=>{
      let employeeId=req.params.id;

      Employees.findById(employeeId,(err,employee)=>{
          if(err){
              return res.status(400).json({
                  success:false,err
              });
          }
                   return res.status(200).json({
                    success:true,
                    employee
                   });
      });
  });

//update  employee


    router.put('/employee/update/:id',(req,res)=>{
        Employees.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body
            },
            (err,employees)=>{
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

    router.delete('/employees/delete/:id',(req,res)=>{
        Employees.findByIdAndRemove(req.params.id).exec((err,deletedEmployee)=>{
            if(err) return res.status(400).json({
                 message:'deleted unsuccessful',err
            });

            return res.json({
                message:"deleted succesfull",deletedEmployee
            });
        });
    }
    );








     module.exports=router;
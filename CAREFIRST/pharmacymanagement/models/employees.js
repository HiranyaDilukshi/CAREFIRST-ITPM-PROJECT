const mongoose= require('mongoose');

const employeeSchema= new mongoose.Schema({

    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    Basic_salary:{
        type:Number,
        required:true
    },

});

module.exports=mongoose.model('Employees',employeeSchema);

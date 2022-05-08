const mongoose = require('mongoose');

const itemcartSchema = new mongoose.Schema({
    
    
    medicineName:{
        type:String,
        required:true
    },
     medicineType:{
        type:String,
        required:true,
        
    },
  
    stockitemunitPrice:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        incrementBy: 100
    },
    stockitemtotal:{
        type:Number,
        required:true,
         
    }
});
module.exports=mongoose.model('ItemCarts',itemcartSchema);
                              //db eke hden name
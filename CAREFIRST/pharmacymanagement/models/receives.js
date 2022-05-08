const mongoose= require('mongoose');

const receiveSchema= new mongoose.Schema({

    stid:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    uprice:{
        type:String,
        required:true
    },
    item:{
        type:String,
        required:true
    },
    month:{
        type:String,
        required:true
    }

});

module.exports=mongoose.model('Receive',receiveSchema);
 
const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const app=express();
const cors=require('cors');

const empRoutes= require('./routes/employees');
const Router = require('./routes/stockitems');
const CartRouter =require('./routes/itemcart');
const recRoutes= require('./routes/receive');
const supRoutes= require('./routes/supplier');


//app middleware
 app.use(bodyparser.json());
 app.use(cors());

 app.use(empRoutes);
 app.use(Router);
app.use(CartRouter);
app.use(supRoutes);
app.use(recRoutes);

app.use(express.json());

app.use(
  express.urlencoded({ extended: true })
);

const PORT = 8000;

const DB_URL= 'mongodb+srv://pwn:12345@myfirstcluster.9gnms.mongodb.net/carefirst?retryWrites=true&w=majority'

mongoose.connect(DB_URL)
.then(()=>{
    console.log("DB connected")
})
.catch((err)=>console.log('DB connection error',err))

app.listen(PORT, () =>{
 console.log(`App is running on ${PORT}`);
 

});



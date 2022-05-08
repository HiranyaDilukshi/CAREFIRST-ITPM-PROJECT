 
const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const app=express();
const cors=require('cors');

const empRoutes= require('./routes/employees');


//app middleware
 app.use(bodyparser.json());
 app.use(cors());

 app.use(empRoutes);

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
 
const express = require('express');
const mongoose = require('mongoose');




//convert request to java script object
const bodyParser = require('body-parser'); 

const cors = require("cors");


const app=express();

//import node.js pacakage for providing a connect/Express middleware can used to enable Cors with options
app.use(cors());

//import routes
const Router = require('./routes/stockitems');
const CartRouter =require('./routes/itemcart');
//app middleware
app.use(bodyParser.json());




//routes middleware
app.use(Router);
app.use(CartRouter);

app.use(express.json());

app.use(
  express.urlencoded({ extended: true })
);



const PORT=8000;
const DB_URL = 'mongodb+srv://pwn:12345@myfirstcluster.9gnms.mongodb.net/carefirst?retryWrites=true&w=majority';
mongoose.connect(DB_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() =>{
   console.log('DB connected');
})
.catch((err) => console.log('DB connection ERROR',err));



app.listen(PORT, ()=>{
    console.log(`App is running on http://localhost:${PORT}`);
});

 

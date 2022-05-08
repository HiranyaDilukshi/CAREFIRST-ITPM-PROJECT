import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from "react-router-dom";

 
 
import EmployeeDetails from './pharmacycomponents/employeemanagementcomponent/EmployeeDetails';
import EmployeeCreate from './pharmacycomponents/employeemanagementcomponent/EmployeeCreate';
import EmployeeEdit from './pharmacycomponents/employeemanagementcomponent/EmployeeEdit';
import employeereport from './pharmacycomponents/employeemanagementcomponent/employeereport'
import attendence from './pharmacycomponents/employeemanagementcomponent/attendence';
 
 

 
import ListStock from './pharmacycomponents/stockmanagementcomponents/ListStock';
import NavBar from './pharmacycomponents/stockmanagementcomponents/NavBar';
import OutOfStock from './pharmacycomponents/stockmanagementcomponents/OutOfStock';
import StockItemsCreate from './pharmacycomponents/stockmanagementcomponents/StockItemsCreate';
import StockItemsDetails from './pharmacycomponents/stockmanagementcomponents/StockItemsDetails';
import StockItemsEdit from './pharmacycomponents/stockmanagementcomponents/StockItemsEdit';
import StockItemsView from './pharmacycomponents/stockmanagementcomponents/StockItemsView';
import Sidebar from './pharmacycomponents/Sidebar';
import ItemDetail from './pharmacycomponents/stockmanagementcomponents/ItemDetail';
import ItemCart from './pharmacycomponents/stockmanagementcomponents/ItemCart';
import ListReport from './pharmacycomponents/stockmanagementcomponents/ListReport';

import Home from './pharmacycomponents/Home';


import Login from './pharmacycomponents/Login';


import createsupplier from './pharmacycomponents/suppliermanagementcomponent/createsupplier'
import supplierdetails from './pharmacycomponents/suppliermanagementcomponent/supplierdetails'
import SupplierEdit from './pharmacycomponents/suppliermanagementcomponent/SupplierEdit';
import receivedetails from './pharmacycomponents/suppliermanagementcomponent/receivedetails';




class App extends Component {
  render() {
    return (
      <div className="bg-image"
      style={{ backgroundColor:"#F5FCFF" }} >  
<NavBar/>
      <BrowserRouter>  
     
    



 
   <Route path="/employees" exact component={EmployeeDetails}></Route>
   <Route path ="/add" component={EmployeeCreate}></Route>
   <Route path="/edit/:id" component={EmployeeEdit}></Route>
   <Route path="/attendence" component={attendence}></Route>
   <Route path="/employeereport" component={employeereport}></Route>
      
    
        
 
   <Route path="/stockitems" exact component={ListStock}></Route>

       <Route path="/addstockitems" component={StockItemsCreate}></Route>
       <Route path="/editstockitems/:id" component={StockItemsEdit}></Route>
       <Route path="/stockitems/:id" component={StockItemsView}></Route>
       <Route path="/outofstockitems" component={OutOfStock}></Route>
       <Route path="/stockitemdetails" component={StockItemsDetails}></Route>
       <Route path="/item/:id" component={ItemDetail}></Route>
       <Route path="/cartitems" component={ItemCart}></Route>
       <Route path="/listreport" component={ListReport}></Route>
       <Route path="/sidebar" component={Sidebar}></Route>
       <Route path="/Home" component={Home}></Route>

       <Route path='/' exact component={Login} /> 


    <Route path="/suppliers" exact component={supplierdetails}></Route>
   <Route path="sidebar" exact component={Sidebar}></Route>
   <Route path="/add" exact component={createsupplier}></Route>
   <Route path="/editsuppliers/:id" exact component={SupplierEdit}></Route>
   <Route path ="/receive" exact component={receivedetails}></Route>
    
     

 

   
      </BrowserRouter> 
   </div> 
  
    );
  }
}

export default App;

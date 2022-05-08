import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from "react-router-dom";

// import ListStock from './pharmacycomponents/stockmanagementcomponents/ListStock';
// import NavBar from './pharmacycomponents/stockmanagementcomponents/NavBar';
// import OutOfStock from './pharmacycomponents/stockmanagementcomponents/OutOfStock';
// import StockItemsCreate from './pharmacycomponents/stockmanagementcomponents/StockItemsCreate';
// import StockItemsDetails from './pharmacycomponents/stockmanagementcomponents/StockItemsDetails';
// import StockItemsEdit from './pharmacycomponents/stockmanagementcomponents/StockItemsEdit';
import Sidebar from './pharmacycomponents/suppliermanagementcomponent/Sidebar';
import createsupplier from './pharmacycomponents/suppliermanagementcomponent/createsupplier'
// import StockItemsView from './pharmacycomponents/stockmanagementcomponents/StockItemsView';
import supplierdetails from './pharmacycomponents/suppliermanagementcomponent/supplierdetails'
import SupplierEdit from './pharmacycomponents/suppliermanagementcomponent/SupplierEdit';
import receivedetails from './pharmacycomponents/suppliermanagementcomponent/receivedetails';


class App extends Component {
  render() {
    return (
      <div className="bg-image"
      style={{ backgroundImage: "white" }} >  
      <BrowserRouter>  
     
    
   <Route path="/" exact component={supplierdetails}></Route>
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
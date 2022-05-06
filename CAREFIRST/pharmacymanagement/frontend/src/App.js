import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from "react-router-dom";

import ListStock from './pharmacycomponents/stockmanagementcomponents/ListStock';
import OutOfStock from './pharmacycomponents/stockmanagementcomponents/OutOfStock';
import StockItemsCreate from './pharmacycomponents/stockmanagementcomponents/StockItemsCreate';
import StockItemsDetails from './pharmacycomponents/stockmanagementcomponents/StockItemsDetails';
import StockItemsEdit from './pharmacycomponents/stockmanagementcomponents/StockItemsEdit';
import Sidebar from './pharmacycomponents/stockmanagementcomponents/Sidebar';
import StockItemsView from './pharmacycomponents/stockmanagementcomponents/StockItemsView';
import ItemDetail from './pharmacycomponents/stockmanagementcomponents/ItemDetail';
import ItemCart from './pharmacycomponents/stockmanagementcomponents/ItemCart';
import ListReport from './pharmacycomponents/stockmanagementcomponents/ListReport';
import StockChart from './pharmacycomponents/stockmanagementcomponents/StockChart';
import Home from './pharmacycomponents/Home';

class App extends Component {
  render() {
    return (
      <div className="bg-image"
      style={{ backgroundColor:"#F5FCFF" }} >  

      <BrowserRouter>  
     
    
   <Route path="/stockitems" exact component={ListStock}></Route>
       <Route path="/addstockitems" component={StockItemsCreate}></Route>
       <Route path="/editstockitems/:id" component={StockItemsEdit}></Route>
       <Route path="/stockitems/:id" component={StockItemsView}></Route>
       <Route path="/outofstockitems" component={OutOfStock}></Route>
       <Route path="/stockitemdetails" component={StockItemsDetails}></Route>
       <Route path="/item/:id" component={ItemDetail}></Route>
       <Route path="/cartitems" component={ItemCart}></Route>
       <Route path="/listreport" component={ListReport}></Route>
        <Route path="/stockchart" component={StockChart}></Route> 
       <Route path="/sidebar" component={Sidebar}></Route>
       <Route path="/Home" component={Home}></Route>
   
      </BrowserRouter> 

    </div> 
    );
  }
}

export default App;
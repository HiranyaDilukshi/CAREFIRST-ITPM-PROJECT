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
 
 


class App extends Component {
  render() {
    return (
      <div className="bg-image"
      style={{ backgroundColor:"#F5FCFF" }} >  

      <BrowserRouter>  
     
    
   <Route path="/" exact component={EmployeeDetails}></Route>
   <Route path ="/add" component={EmployeeCreate}></Route>
   <Route path="/edit/:id" component={EmployeeEdit}></Route>
   <Route path="/attendence" component={attendence}></Route>
   <Route path="/employeereport" component={employeereport}></Route>
      
    
        
   
      </BrowserRouter> 

    </div> 
    );
  }
}

export default App;
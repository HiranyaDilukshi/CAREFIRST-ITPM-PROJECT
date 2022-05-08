import React,{ Component } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
 
//import e from 'express';

export default class  EmployeeCreate extends Component {
    constructor(props){
        super(props);
        this.state={
      
            id: "",
            name: "",
            email: "",
            address: "",
            type: "",
            position: "",
            Basic_salary:""

        }
    }
         handleInputEmployeeChange = (e)=>{
             const {name,value} =e.target;

             this.setState({
                 ...this.state,
                 [name]:value
             })
         }

         onEmployeeSave =(e)=>{

            e.preventDefault();

            const {id,name,email,address,type,position,Basic_salary}=this.state;

            const stkdata={
        
                id:id,
                name:name,
                email:email,
                address:address,
                type:type,
                position:position,
                Basic_salary:Basic_salary
           }
           console.log(stkdata)

           
           axios.post("http://localhost:8000/employee/save",stkdata).then((res)=>{
            if(res.data.success){
                this.setState(
                    {
                      
                        id: "",
                        name: "",
                        email: "",
                        address: "",
                        type: "",
                        position: "",
                        Basic_salary:""
            
                    }
                )
            }
                //this.props.history.push('/');
        })
    }   
         

 
 


    render() {

        return (
            <div>
                  <Sidebar/>
            <div style={{ 
              marginLeft:"250px"}}
           >
   
          <div >
              <div className = "container">   
                  <div className = "row">
                      
                      <div style={{boxShadow: "0 15px 20px rgba(0, 0, 0, 0.356",borderRadius:"10px"}} className = "card col-md-6 offset-md-3 offset-md-3" >
                      <br></br> <h3 className="text-center" >ADD NEW EMPLOYEE</h3> <br></br>
                       
                      <div className="viewback2">
                            <div className="card-body"> 
                              <form >
                              
                                  <div className = "form-group">
                                  <label>Employee Id</label>
                                  <input required="required" placeholder="employee id" name="id" className="form-control" 
                                         value={this.state.id} onChange={this.handleInputEmployeeChange}/>
                                  </div>

                                 

              
                                  <div className = "form-group">
                                  <label>Employee Name</label>
                                  <input  required="required" placeholder="employee name" name="name" className="form-control" 
                                         value={this.state.name} onChange={this.handleInputEmployeeChange} />
                                         
                                  </div>
                                
                                  <div className = "form-group">
                                  <label>Employee Email</label>
                                  <input  required placeholder="employee email" name="email" className="form-control" 
                                          value={this.state.email} onChange={this.handleInputEmployeeChange} />
                                         
                                  </div>
                                  <div className = "form-group">
                                  <label>Employee Address</label>
                                  <input placeholder="employee address" name="address" className="form-control" 
                                   value={this.state.address}   onChange={this.handleInputEmployeeChange} required/>
                                         
                                  </div>

                                        
                                  <div className="form-group ">
                                  <label>Employee Type</label>
                                              <select name="type" className="form-control" onChange={this.handleInputEmployeeChange} value={this.state.type} required>
                                                  <option value="" disabled={true}>------------Select Category------------</option>
                                                  <option value="cashier">cashier</option>
                                                  <option value="receptionist">receptionist</option>
                                                  <option value="assistant">assistant</option>
                                                  <option value="manager">manager</option>
                                                   
                                              </select>
                                          </div>
                                   
                                     <div className="form-group ">
                                  <label>Employee Position</label>
                                              <select name="position" className="form-control" onChange={this.handleInputEmployeeChange} value={this.state.position} required>
                                                  <option value="" disabled={true}>------------Select Category------------</option>
                                                  <option value="junior">junior</option>
                                                  <option value="senior">senior</option>
                                                  <option value="intern">intern</option>
                                                   
                                              </select>
                                          </div>

                                    
                               
                                  <div className = "form-group">
                                  <label>Basic Salary (Rs.)</label>
                                  <input required="required" pattern="[0-9]{0,5}" title="This field should consist only numerical values." placeholder="basic salary" name="Basic_salary" className="form-control" 
                                       value={this.state.Basic_salary}   onChange={this.handleInputEmployeeChange}/>
                                         
                                  </div>
                               
                                  
                                  <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onEmployeeSave}>
                   <i className="far fa-check-square"></i>&nbsp;Insert
             </button>
             <button className="btn btn-danger"  style= {{marginLeft: "20px", marginTop:"15px"}}> Cancel</button>
                                  


                                  
                        

                              </form>   <br></br>
                          </div>
                      </div>  
                  </div>   
              </div>
          </div></div>
          </div> <br></br><br></br><br></br><br></br></div>
        );
    }
}


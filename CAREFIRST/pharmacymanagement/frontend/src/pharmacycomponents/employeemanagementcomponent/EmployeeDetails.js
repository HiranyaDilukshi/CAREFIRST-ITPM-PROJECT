import React,{ Component } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import CF3 from './CF3.png';

export default class EmployeeDetails extends Component{

  constructor(props){
      super(props);

      this.state={
        search: '',
          employees:[]
      }
      this.addEmployee = this.addEmployee.bind(this);
  }

  componentDidMount(){
    this.retrieveEmployees();
  }

  addEmployee() {
    this.props.history.push('/add');
}
 addReport() {
  this.props.history.push('/employeereport');
}
 retrieveEmployees(){
       axios.get("http://localhost:8000/employees").then((res)=>{
        if(res.data.success){
            this.setState({
                employees:res.data.existingEmployees
            });

           

            console.log(this.state.employees);
        }
    });
}


onDeleteEmployee = (eid)=>{

    

    axios.delete(`http://localhost:8000/employees/delete/${eid}`).then((res)=>{
      
      this.retrieveEmployees();
    })
  }


  cancelSearch = () => {
   this.setState({
        "search": ''
    });
    axios.get(`http://localhost:8000/employees`).then((res) => {
        this.setState({
           employees:res.data.existingEmployees
        });
    });
}

  filteremployee(employees,sechEmployeekeyKey){
    const employeeResult=employees.filter((employee)=>

        
         employee.name.toLowerCase().includes(sechEmployeekeyKey) ||
         employee.position.toUpperCase().includes(sechEmployeekeyKey) ||
         employee.type.toLowerCase().includes(sechEmployeekeyKey) 
         
      
          
            
    )

    this.setState({employees : employeeResult})
  }

  handleEmployeeSearchArea=(e)=>{
   const sechEmployeeKey = e.currentTarget.value;

    axios.get("http://localhost:8000/employees").then(res=>{
      if(res.data.success){
         this.filteremployee(res.data.existingEmployees,sechEmployeeKey)
     }
    });

  }
  render(){

   
    return (
      <div>
      <Sidebar/>
     <div style={{marginLeft:"250px"}}>
       <ul class="nav nav-tabs">
          <li class="nav-item">
             <a class="nav-link active" aria-current="page" href="/attendence">Manage Attendence</a>
          </li>
          
          <li class="nav-item">
             <a class="nav-link active" aria-current="page" href="/employeereport">Employee Report</a>
          </li>

          
       </ul>

    </div>
    <div className='container' style={{marginLeft:"250px"}}>

{/* <div className="row" style={{marginRight:"100px"}}>
          <div className="col-lg-9 mt-2 mb-2">
            
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input 
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchQuery"
            onChange={this.handleStockItemSearchArea}></input>
          </div>
        </div> */}


                    <div style={{ "float": "right",marginRight:"100px" }}>
                                            <div className="input-group btn-group-sm ">
                                                <input type="text" style={{ border: 0 }} className="form-control" placeholder="Search.." name="search"
                                                      onChange={this.handleEmployeeSearchArea}
                                                       />

                                                <div className="input-group-append btn-group-sm">
                                                   

                                               
                                                    <button className="btn btn-outline-danger"
                                                     onClick={this.cancelSearch}
                                                     >
                                                        <i class="fa fa-close"></i>

                                                    </button>

                                                </div>
                                            </div>


                                        </div>



                    <br></br><br></br>
              <div style={{marginLeft:"400px"}}>   
               <img 
               src={CF3} className='logo'/></div> 
                <b>    <h4 className="text-center" style={{fontFamily:"Franklin Gothic Medium", marginRight:"200px"}}>EMPLOYEE DETAILS</h4></b>
                   
                    <div>
                        <button class="btn btn-success" onClick={this.addEmployee}>Add Item</button>
                         
                         
                 
                    <br></br><button class="btn btn-success" 
                   onClick={this.addReport} 
                    style={{ marginLeft: "1000px"}}>Generate Employee Report</button>   </div><br></br>
                    <div className="row"> <div>
                        
                    </div>


                        <br />
                        <br />
                      
                        <table style={{ backgroundColor: "EDEFF1",width:"90%",boxshadow: "-1px 8px 15px 0px rgba(0, 0, 0, 0.44)"}} className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                 
                                    <th>Employee Id</th>
                                    <th>Employee Name</th>
                                    <th>E-mail</th>

                                    <th>Address</th>
                                    <th> Employee Type</th>
                                    <th>Employee Position</th>
                                    <th>Basic Salary(Rs.)</th>
                                    <th >Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map((employees,index) =>(
                                        <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                       
                                        <td>
                                        {employees.id}
                                        </td>
                                           
                                                 <td>{employees.name}</td>
                                                
                                                <td>{employees.email}</td>
                                                <td >{employees.address}</td>
                                                <td >{employees.type}</td>
                                                <td>{employees.position}</td>
                                                <td>{employees.Basic_salary}</td>
                                                
                                                <td ><div class="btn-group" role="group" >

                                                <a className="btn btn-warning" 
                                                href={`/edit/${employees._id}`}
                                                >
                                                <i className="fas fa-edit"></i>
                  </a>    &nbsp;&nbsp;&nbsp;
                  <a className="btn btn-danger" href="#"
                  
                  
                  onClick={() => {
                    const confirmBox = window.confirm(
                       "Do you really want to delete this record?"
                    )
                    if (confirmBox === true) {
                      this.onDeleteEmployee(employees._id)
                    }
                  
                    }} > 
                    <i className="far fa-trash-alt"></i>
                  </a>
                          </div></td> </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
     
    )
  }

}
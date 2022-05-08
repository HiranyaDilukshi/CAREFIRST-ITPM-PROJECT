import React,{ Component } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar';

import medImg from "./medicines.jpg";

export default class  ItemDetail extends Component {
    constructor(props){
        super(props);
        this.state={
      
            medicineName: "",
            medicineType: "",
            stockitemunitPrice: "",
            quantity:'',
            stockitemImage:'',
            stockitem:{},
            stockitemtotal:''
        }
    }
      
        handleInputStockChange=(stk)=>{
            const {name,value} = stk.target;
    
            this.setState({
                ...this.state,
                [name]:value
              
                
            })
        }

        onStockItemSave=(stk)=>{
            stk.preventDefault();
            let bookMed = { medicineName: this.state.medicineName,  medicineType: this.state. medicineType , stockitemunitPrice: this.state. stockitemunitPrice, quantity: this.state.quantity ,  stockitemImage:this.state.stockitemImage ,stockitemtotal:(this.state.quantity*this.state.stockitemunitPrice )};
            console.log('bookMed => ' + JSON.stringify(bookMed));
            //const {medicineName,medicineType,stockitemunitPrice,quantity,stockitemImage,stockitemtotal}=this.state;
    
            // const stkdata={
        
            //     medicineName:medicineName,
            //     medicineType:medicineType,
            //     stockitemunitPrice:stockitemunitPrice,
            //     quantity:quantity,
            //     stockitemImage:stockitemImage,
            //    stockitemtotal:stockitemtotal
            // }
            // console.log(stkdata)

           
            axios.post("http://localhost:8000/cartitem/save",bookMed).then((res)=>{
            if(res.data.success){
                this.setState(
                    {
                      
                        medicineName:"",
                        medicineType:"",
                        stockitemunitPrice:"",
                        quantity:"",
                        stockitemtotal:""
                    }
                )
            }
                this.props.history.push('/cartitems');
        })
    } 
    componentDidMount(){
        const sitemid=this.props.match.params.id;

        axios.get(`http://localhost:8000/item/${sitemid}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    stockitem:res.data.stockitem,
                    medicineName:res.data.stockitem.medicineName,
                    medicineType:res.data.stockitem.medicineType,
                    stockitemunitPrice:res.data.stockitem.stockitemunitPrice,
                    quantity:res.data.stockitem.quantity,
                    stockitemtotal:res.data.stockitem.stockitemtotal
                });
                console.log(this.state.stockitem);
            }
        });
    }  
    cancel(){
        this.props.history.push('/');
    }

   
    render() {
        const {medicineName,medicineType,stockitemunitPrice,quantity,stockitemImage,stockitemtotal}=this.state.stockitem;
        
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
                      <br></br> <h3 className="text-center" >ADD NEW ORDER</h3> <br></br>
                   <center>   <img src={stockitemImage}  style={{ height:"300px",width:"300px"}} alt="medicines"/></center>
                      <div className="viewback2">
                            <div className="card-body"> 
                              <form >
                              
                                  <div className = "form-group">
                                  <label>Medicine Name</label>
                                  <input required="required" placeholder="medicine title" name="medicineName" className="form-control" 
                                         value={medicineName} onChange={this.handleInputStockChange}/>
                                  </div>

                                  <div className="form-group ">
                                  <label>Medicine Type</label>
                                              <select name="medicineType" className="form-control" onChange={this.handleInputStockChange} value={medicineType} required>
                                                  <option value="" disabled={true}>------------Select Category------------</option>
                                                  <option value="Syrup">Syrup</option>
                                                  <option value="Tablet">Tablet</option>
                                                  <option value="Capsules">Capsules</option>
                                                  <option value="Drops">Drops </option>
                                                  <option value="Inhalers">Inhalers</option>
                                                  <option value="Injections">Injections</option>
                                              </select>
                                          </div>

                               
                                  <div className = "form-group">
                                  <label>Unit Price (Rs.)</label>
                                  <input required="required" pattern="[0-9]{0,5}" title="This field should consist only numerical values." placeholder="medicine unit price" name="stockitemunitPrice" className="form-control" 
                                       value={stockitemunitPrice}   onChange={this.handleInputStockChange}/>
                                         
                                  </div>
                                  <div className="form-group">
                                            <label> Quantity </label>
                                            <input placeholder="Quantity" name="quantity" className="form-control" 
                                            value={quantity} onChange={this.handleInputStockChange} 
                                            pattern="[0-9]{0,4}" title="The quantity should consist of numerical values"required/>
                                          
                                        </div>
                                        {/* <div className="form-group">
                                            <label> Total </label>
                                            <input placeholder="Quantity" name="stockitemtotal" className="form-control" 
                                            value={quantity*stockitemunitPrice} onChange={this.handleInputStockChange} 
                                            pattern="[0-9]{0,4}" title="The quantity should consist of numerical values"required/>
                                          
                                        </div> */}
                                  <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onStockItemSave}>
                   <i className="far fa-check-square"></i>&nbsp;Insert
             </button>
             <button className="btn btn-danger" onClick={this.cancel.bind(this)} style= {{marginLeft: "20px", marginTop:"15px"}}> Cancel</button>
                                  {/* <button className="btn btn-dark" style={{marginLeft: "300px", width:"20%"}}
                                  onClick={() => {
                                                          const confirmBox = window.confirm(
                                                              "Do you really want to cancel adding this item?"
                                                          )
                                                          if (confirmBox === true) {
                                                              {this.cancel.bind(this)}
                                                          }
                                                      }}>Cancel</button> */}


                                  
                        

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


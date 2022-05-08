import React,{ Component } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar';
import medImg from "./medicines.jpg";

export default class  StockItemsCreate extends Component {
    constructor(props){
        super(props);
        this.state={
      
            medicineName: "",
            medicineType: "",
            medicineDescription: "",
            medicineManufacturer: "",
            stockitemImage: "",
            stockitemAvailableQty: "",
            stockitemunitPrice: ""

        }
    }
        // this.changeItemIDHandler = this.changeItemIDHandler.bind(this);
        // this.changeMedicineNameHandler = this.changeMedicineNameHandler.bind(this);
        // this.changeMedicineTypeHandler = this.changeMedicineTypeHandler.bind(this);
        // this.changeMedicineDescriptionHandler = this.cchangeMedicineDescriptionHandler.bind(this);
    
        // this.changeMedcineManufacturerHandler = this.changeMedcineManufacturerHandler.bind(this);
        // this.changeStockitemIntialQtyHandler = this.changeStockitemIntialQtyHandler.bind(this);
        // this.changeStockitemAvailableQtyHandler = this.changeStockitemAvailableQtyHandler.bind(this);
        // this.changeUnitPriceHandler = this.changeUnitPriceHandler.bind(this);

        // this.saveStock = this.saveStock.bind(this);


        handleInputStockChange=(stk)=>{
            const {name,value} = stk.target;
    
            this.setState({
                ...this.state,
                [name]:value
                
                
            })
        }

        onStockItemSave=(stk)=>{
            stk.preventDefault();
    
            const {medicineName,medicineType, medicineDescription, medicineManufacturer,stockitemImage,stockitemAvailableQty,stockitemunitPrice}=this.state;
    
            const stkdata={
        
                medicineName:medicineName,
                medicineType:medicineType,
                medicineDescription: medicineDescription,
                medicineManufacturer:medicineManufacturer,
                stockitemImage:stockitemImage,
                stockitemAvailableQty:stockitemAvailableQty,
                stockitemunitPrice:stockitemunitPrice
            }
            console.log(stkdata)

            if(medicineName == "" || medicineType==""||  medicineDescription == "" || medicineManufacturer ==""|| stockitemImage ==""|| stockitemAvailableQty == "" ||stockitemunitPrice==""){
                alert("Fill all the Fields")
                return 0;
            }
       
           
            axios.post("http://localhost:8000/stockitem/save",stkdata).then((res)=>{
            if(res.data.success){
                this.setState(
                    {
                      
                        medicineName:"",
                        medicineType:"",
                        medicineDescription:"",
                        medicineManufacturer:"",
                        stockitemImage:"",
                        stockitemAvailableQty:"",
                        stockitemunitPrice:""
                    }
                )
            }
                this.props.history.push('/');
        })
    }   
    cancel(){
        this.props.history.push('/');
    }

    // validateNumberField = myNumber => {
    //     const numberRegEx = /\-?\d*\.?\d{1,2}/;
    //     return numberRegEx.test(String(this.state.stockitemunitPrice).toLowerCase());
    //   };
    
    //   changeUrl = e => {
    //     const { value } = e.target;
    //     const isValid = !value || this.validateNumberField(value);
    //     console.log('isValid', isValid)
    //     this.setState({
    //       myNumber: value,
    //       isValid
    //     });
    //   };


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
                      <br></br> <h3 className="text-center" >ADD NEW MEDICINE</h3> <br></br>
                      <img src={medImg} alt="medicines"/>
                      <div className="viewback2">
                            <div className="card-body"> 
                              <form >
                              
                                  <div className = "form-group">
                                  <label>Medicine Name</label>
                                  <input required="required" placeholder="medicine title" name="medicineName" className="form-control" 
                                         value={this.state.medicineName} onChange={this.handleInputStockChange}/>
                                  </div>

                                  <div className="form-group ">
                                  <label>Medicine Type</label>
                                              <select name="medicineType" className="form-control" onChange={this.handleInputStockChange} value={this.state.medicineType} required>
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
                                  <label>Medicine Description</label>
                                  <input  required="required" placeholder="medicine details" name="medicineDescription" className="form-control" 
                                         value={this.state.medicineDescription} onChange={this.handleInputStockChange} />
                                         
                                  </div>
                                
                                  <div className = "form-group">
                                  <label>Medicine Manufacturer</label>
                                  <input  required placeholder="manufaturing company name" name="medicineManufacturer" className="form-control" 
                                          value={this.state.medicineManufacturer} onChange={this.handleInputStockChange} />
                                         
                                  </div>
                                  <div className = "form-group">
                                  <label>Medicine Image</label>
                                  <input placeholder="medicine image" name="stockitemImage" className="form-control" 
                                   value={this.state.stockitemImage}   onChange={this.handleInputStockChange} required/>
                                         
                                  </div>
                                  <div className = "form-group">
                                  <label>Available Quantity</label>
                                  <input required="required" pattern="[0-9]{0,5}" title="This field should consist only numerical values." placeholder="medicine availability" name="stockitemAvailableQty" className="form-control" 
                                       value={this.state.stockitemAvailableQty}   onChange={this.handleInputStockChange}/>
                                         
                                  </div>
                               
                                  <div className = "form-group">
                                  <label>Unit Price (Rs.)</label>
                                  <input required="required" pattern="[0-9]{0,5}" title="This field should consist only numerical values." placeholder="medicine unit price" name="stockitemunitPrice" className="form-control" 
                                       value={this.state.stockitemunitPrice}   onChange={this.handleInputStockChange}/>
                                         
                                  </div>
                               
                                  
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


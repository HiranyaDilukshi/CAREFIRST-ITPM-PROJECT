
import React,{ Component } from 'react';
import axios from 'axios';

const tabledesign= {
    /*color: "#000080,*/
    background: "white",
    backgroundRepeat:"no-repeat",
  
    };
class ListReport extends Component {
    constructor(props){
        super(props);

        this.state ={
            stockitems:[],
            all_stockitems:[],
              Alltotal:0
        }
       


    }
    componentDidMount(){
        
        this.retrieveStockitems();
          
    }
    retrieveStockitems(){
        axios.get(`http://localhost:8000/stockitems`).then((res)=>{
         if(res.data.success){
             this.setState({
                 stockitems:res.data.existingStockitems
             });
 
            
 
             console.log(this.state.stockitems);
         }
     });
 }
 
    print(){


        window.print();
    }
    cancel(){
        this.props.history.push('/');
    }
    addchart(){
        this.props.history.push('/orderchart');
    }

    cancelSearch = () => {
        this.setState({
            "search": ''
        });
        axios.get(`http://localhost:8000/stockitems`).then((res) => {
            this.setState({
                stockitems:res.data.existingStockitems
            });
        });
    }
    
      filterstockitem(stockitems,sechStockItemKey){
        const stockitemResult=stockitems.filter((stockitem)=>
    
            
          
             stockitem.stockitemAvailableQty.toString().toLowerCase().includes(sechStockItemKey) 
          
         
                
        )
    
        this.setState({stockitems : stockitemResult})
      }
    
      handleStockItemSearchArea=(stk)=>{
        const sechStockItemKey = stk.currentTarget.value;
    
        axios.get("http://localhost:8000/stockitems").then(res=>{
          if(res.data.success){
               this.filterstockitem(res.data.existingStockitems,sechStockItemKey)
          }
        });
    }
    render() {
        return (  
            
            <div class="col s12" style={{background: `white)`}}>
          <div style={{ marginLeft: "50px",marginRight: "50px",marginTop:"10px" }}>   <br></br><br></br>
       

             
          <div style={{ "float": "right",marginRight:"100px" }}>
                                            <div className="input-group btn-group-sm ">
                                                <input type="text" style={{ border: 0 }} className="form-control" placeholder="Search.." name="search"
                                                      onChange={this.handleStockItemSearchArea} />

                                                <div className="input-group-append btn-group-sm">
                                                   

                                               
                                                </div>
                                            </div>


                                        </div>
          
             


                  

              <br></br><br></br>
          <b>    <h5 className="text-center" style={{fontFamily:"Bookman, URW Bookman L, serif"}}>CAREFIRST STOCK REPORT</h5></b>
          <br></br>
          <div class="container">
         
                    
             
              <br></br>   <br></br> 
              <div className="row">
      
                  <table class="table table-success" style={{backgroundColor:"red"}} >
                      <thead>
                      <tr>   
                      <th >Medicine Name</th>
                                    <th>Medicine Type</th>
                            
                                    <th>Medicine Manufacturer</th>
                                   
                                    <th>Availabile Quantity</th>
                                    <th>Unit Price(Rs.)</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                               










                               this.state.stockitems.map((stockitems,index) =>(
                                <tr key={index}>
                              
                               
                                <td>
                                    
                                    {stockitems.medicineName}
                                   
                                </td>
                                   
                                         <td>{stockitems.medicineType}</td>
                                        
                                        
                                        <td >{stockitems.medicineManufacturer}</td>
                                      
                                        <td>{stockitems.stockitemAvailableQty}</td>
                                        <td>{stockitems.stockitemunitPrice}</td>
                                        
                                       </tr>
                            ))
                            }    
                        </tbody>  
                    </table>
                </div> 
                <table class="centered" style={{width:"600px",marginLeft:"800px"}} > 
                    <tr>
             <th className="text-left" style={{fontStyle:"Bebas Neue"}}>  Total Amount Of Orders Rs.: </th> 
               <td style={{tabledesign}}>{this.state.income}</td>
               </tr>
               <tr>
             <th className="text-left" style={{fontStyle:"Bebas Neue"}}>No Of Orders:</th>
           
              
               <td style={{fontStyle:"Bebas Neue"}}>{this.state.ordercount}</td>
               </tr>
               <tr>
               <th className="text-left" style={{fontStyle:"Bebas Neue"}}>No Of Items Sold:</th>
               <td style={{fontStyle:"Bebas Neue"}}> {this.state.quantity}</td>
               </tr>
               
</table>
<div>
<th><input style={{width:"150px", height:"40px",marginTop:"20px",marginRight:"120px"}} className="btn btn-success" onClick={this.cancel.bind(this)} type="submit" value="CANCEL"/></th>
<th><input style={{width:"150px", height:"40px",marginTop:"20px",marginLeft:"950px"}} className="btn btn-success" onClick={this.print} type="submit" value="PRINT"/></th>
</div>
<br/><br/><br/><br/><br/><br/><br/>
          <div>  </div> </div></div></div>
        );
    }
    
}
export default ListReport;

import React,{ Component } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar';

class ItemCart extends Component {
    constructor(props){
        super(props)

        this.state = {
         
            orderid:'',
            medicineName:'',
            medicineType:'',
            stockitemunitPrice:'',
            quantity:'',
            stockitemtotal:'',
            cartitems:[],
            temp: [],
            tempPrice: [],
            Alltotal:0

          
        }
      
  
    }
 componentDidMount(){
        // RentalItemService.getTemporaryItems().then((res) => {
        //     this.setState({ temporaryitems: res.data});
        //     this.calculate(res.data);
        // });
 
      
        axios.get(`http://localhost:8000/cartitems`).then((res)=>{   
            this.retrieveCartitems(); 
            this.calculate(res.data);

 });
        
    }  
     calculate(data) {
      
        // var totalCart =0;
        // var i = 0;

        
        
        // var newData = JSON.stringify(newData);
        //  newData = JSON.parse(newData);
        // //console.log(newData);
        // newData.forEach((item) => {
        //     totalCart +=item.stockitemunitPrice*item.quantity;
        //     i++;
        // })
       
           
        //     this.setState({
        //         total: totalCart,
                
        //       });
       data=JSON.parse(data);
        var stockitemtotal =0;
        data.forEach(tp => {
            stockitemtotal+=tp.price;
        })
            this.state.Alltotal =stockitemtotal;

    } 

    
    retrieveCartitems(){
       




        axios.get(`http://localhost:8000/cartitems`).then((res)=>{
            if(res.data.success){
                this.setState({
             
                    temp:res.data.existingCartitems,

                    







                });
            //    this.calculate(res.data);
                console.log(this.state.temp);
                
            }
            
        })
    }
   
    deleteCartitem = (sitemid)=>{

    

        axios.delete(`http://localhost:8000/cartitem/delete/${sitemid}`).then((res)=>{
          
          this.retrieveCartitems();
          
        })
      }

    // confirm= (e) =>{
    //     //Redirect to isuru booking with total price
    //     e.preventDefault();
    //     let itemrent = {bookingid: this.state.bookingid, totalprice:this.state.Alltotal};
    //     console.log('itemrent => ' + JSON.stringify(itemrent));
        
    //     var data = sessionStorage.getItem('bookingSession');
    //     data = JSON.parse(data);

    //     data.total = this.state.Alltotal;    
    //     sessionStorage.setItem('bookingSession',JSON.stringify(data));

    //     this.props.history.push('/add-bookings/_price');
    //     RentalItemService.createRentHistory(itemrent).then(res => {
            
    //     });
    // }

    addMore(){
        this.props.history.push('/stockitemdetails');
    }

   

    // calculate(data){
    //     var total =0;
    //     data.forEach(tp => {
    //          total+=tp.price;
    //     })
    //         this.state.Alltotal =total;
    //     //console.log(total,"TOTAL");
    // }
 
    
    onStockItemSave=(stk)=>{
        stk.preventDefault();

        const {medicineName,medicineType,stockitemunitPrice,quantity,unittotal}=this.state;

        const stkdata={
    
            medicineName:medicineName,
            medicineType:medicineType,
            stockitemunitPrice: stockitemunitPrice,
            
        
            quantity:quantity,
            unittotal:unittotal
        }
        console.log(stkdata)

        
       
        axios.post("http://localhost:8000/cartitem/save",stkdata).then((res)=>{
        if(res.data.success){
            this.setState(
                {
                  
                    medicineName:"",
                    medicineType:"",
                    stockitemunitPrice:"",
                    quantity:"",
                    unittotal:""
                }
            )
        }
            this.props.history.push('/');
    })
}   
    render() {
        return (
            <div>
                 <Sidebar/>  <h2 className="text-center"> Order Details </h2>
                <div className="row" style={{paddingTop:"50px", paddingBottom:"170px",paddingLeft:"150px"}}> 
                <center>
                <div class="formrDivitemrent2">
               
                <div className="row">
                </div>
                <div className = "row">
                    <table className = "table  table-hover table bordered ">
                        <thead>
                            <tr> 
                                <th>Item Name</th>
                                <th>Item Type</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Unit Total</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.temp.map(
                                    itemcart =>
                                    <tr key = {itemcart._id}>
                                        <td> {itemcart.medicineName}</td>
                                        <td> {itemcart.medicineType}</td>
                                        <td>{itemcart.stockitemunitPrice} </td>
                                        <td> {itemcart.quantity}</td>  
                                        <td >
           <span class="text-muted">{itemcart.stockitemtotal}</span>
           


   </td>
                                        <td>
                                        <a className="btn btn-danger" href="#"
                  
                  
                  onClick={() => {
                    const confirmBox = window.confirm(
                        "Do you really want to delete this record?"
                    )
                    if (confirmBox === true) {
                      this.deleteCartitem(itemcart._id)
                    }
                  
                  
                  
                  
                  
                  
               }} >
                    <i className="far fa-trash-alt"></i>
                  </a>
                                        </td>                               
                                    </tr>
                               
                                )
                            }
                          {/* <tr style={{border:"3px dashed pink"}} >

<td style={{width:"500px",textAlign:"left"}}><span>Total</span></td>
<td value={this.state.Alltotal}  onChange={this.changeTotalHandler} style={{width:"150px",textAlign:"right"}}><span>{this.state.Alltotal}  
                  </span></td><td></td>
</tr>  */}<tr>
                                <td>
                                <button onClick= {this.addMore.bind(this)} className="btn btn-info"> Add more </button>
                                </td>
                                <td>
                              
                               
                                <button onClick= {this.onStockItemSave} className="btn btn-danger"> Checkout</button>
                                </td>
                            </tr>
                            <tr style={{border:"3px dashed pink"}} >

  <td style={{width:"500px",textAlign:"left"}}><span>Total</span></td>
<td value={this.state.Alltotal}   style={{width:"150px",textAlign:"right"}}><span>{this.state.Alltotal}  
                    </span></td><td></td>
  </tr>
                        </tbody>
                    </table>

                </div>
                </div>
                </center>
                </div>
            </div>
        );
    }
}

export default ItemCart;
import React,{ Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import './medicineitem.css';
import Sidebar from './Sidebar';

export default class StockItemsDetails extends Component{

  constructor(props){
      super(props);

      this.state={
          stockitems:[]
      }
      this.addStock = this.addStock.bind(this);
  }

  componentDidMount(){
    this.retrieveStockitems();
  }

  addStock() {
    this.props.history.push('/addstockitems');
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


onDeleteStockItem = (sitemid)=>{

    

    axios.delete(`http://localhost:8000/stockitem/delete/${sitemid}`).then((res)=>{
      alert("Item Deleted from the Stock Successfully");
      this.retrieveStockitems();
    })
  }


  filterstockitem(stockitems,sechStockItemKey){
    const stockitemResult=stockitems.filter((stockitem)=>

         stockitem.stockitemId.toLowerCase().includes(sechStockItemKey) ||
         stockitem.medicineName.toLowerCase().includes(sechStockItemKey) ||
         stockitem.medicineDescription.toLowerCase().includes(sechStockItemKey)
            
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
  render(){


    return (
        <div>
             <Sidebar/>
            <div className="row" style={{paddingTop:"5px", paddingBottom:"170px"}}>

          <div>

          <br/>
              <h2 style={{paddingTop:"2px"}}className="text-center">Place Drug Order</h2>
          <br/>

          <center>

              <div style={{marginLeft:"250px"}}className="formrDivitemrent">
              <div className="mrgn">
                  <Grid container >
                      {
                          this.state.stockitems.map((stockitems,index) =>(
                                  
                                  
                                  <Grid item key ={stockitems.stockitemId} xs={12} md={6} lg={3}>
                                      <Paper style={{width: 220,height: 340,borderRadius:"20px"}} >
                                          <div className="itemCard" >
                                             
                                              <div className="itemCard-content">
                                              <div className="itemimgCard">
                                                    <br/>
                                                    <img  src={stockitems.stockitemImage} alt="" />
                                                </div>
                                                  <div className="itemCard-title">
                                                  {stockitems.medicineName}                                                    
                                                  </div>
                                                  
                                  

                                                   

                                              </div>

                                              <div className="itemBtn" >
                                              <button className="btn btn-dark"> <a href={`/item/${stockitems._id}`} style={{textDecoration:'none'}}> See more </a></button>
                                              </div>

                                             
                                          </div>
                                      </Paper>
                                      <br/>
                                  </Grid>
                                                                              
                              )      
                          )

                      }
                  </Grid>
                  </div>
              </div>
              <br/>
          </center>
          </div>
          </div>
        </div>
    );






  }

}
import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './home.css';
import homeImg from "./HomepageImg.png";

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
      
        }


    }

    

    goToStore() {

        this.props.history.push(`/stockitems`);

    }
        goToEmployee() {

        this.props.history.push(`/employees`);

    }
    render() {
        return (
            
                <div className="bg-image"
        style={{ backgroundImage: "url('https://thumbs.dreamstime.com/b/wedding-floral-decorative-vintage-background-ecru-bege-wedding-floral-decorative-vintage-background-ecru-bege-pale-wallpaper-119328289.jpg')" }} >
    <div class="container" >             <header class="section">
                   <section class="full-width ">
                        <div className="row">
                            <center>
                     <center>      <img src={homeImg} style={{ width: 300,height: 150,marginTop:"50px", marginLeft:50}} alt="" /></center> 
                            
                            </center>
                            <br/>
                            <div >

          <div style={{marginLeft:50}}>
                                <center>
                                    <Grid container  >
                                        {
                                            <Grid item key={""} xs={12} md={4} lg={3}> <br />
                                                <Paper style={{ width: 250,height: 350 }}>
                                                    <div className="homeCard" >
                                                        <div className="HomeimgCard" >

                                                            <img src={"https://media.istockphoto.com/photos/pharmacist-handing-medication-to-customer-in-drug-store-picture-id107429729?k=20&m=107429729&s=612x612&w=0&h=HjhUyqsvuSG-XrOSKDfxiuwAwbR4dyKv4ooDoviDwdg="} alt="" />
                                                        </div>
                                                            <br/>
                                                        <div className="homeCard-content">

                                                            <div className="homeCard-title">
                                                                EMPLOYEES
                                                            </div>

                                                            <div className="homeCard-body">
                                                                <p> Manage Employees</p>
                                                            </div>

                                                        </div>

                                                        <div className="HomeBtn" >
                                                            <button style={{ marginTop: 30,width: 100 }} onClick={this.goToEmployee.bind(this)} >View</button>
                                                        </div>
                                                    </div>
                                                </Paper>

                                            </Grid>

                                        }

                                        {
                                            <Grid item key={""} xs={12} md={4} lg={3}> <br />
                                                <Paper style={{ width: 250,height: 350 }}>
                                                    <div className="homeCard" >
                                                        <div className="HomeimgCard" >

                                                            <img src={"https://www.durbinglobal.com/assets/templates/images/4-2-2021-11-2.homepage_new.jpg"} alt="" />
                                                        </div>
                                                        <br/>
                                                        <div className="homeCard-content">

                                                            <div className="homeCard-title">
                                                                SUPPLIERS
                                                            </div>

                                                            <div className="homeCard-body">
                                                                <p> Manage Suppliers </p>
                                                            </div>

                                                        </div>

                                                        <div className="HomeBtn" >
                                                            <button style={{ marginTop: 30,width: 100 }} onClick={"#"} > View</button>
                                                        </div>
                                                    </div>
                                                </Paper>

                                            </Grid>

                                        }

                                        {
                                            <Grid item key={""} xs={12} md={4} lg={3}> <br />
                                                <Paper style={{ width: 250,height: 350 }}>
                                                    <div className="homeCard" >
                                                        <div className="HomeimgCard" >

                                                            <img src={"https://www.pharmacy.biz/wp-content/uploads/sites/1/2020/08/iStock-1249345137.jpg"} alt="" />
                                                        </div>
                                                        <br/>
                                                        <div className="homeCard-content">

                                                            <div className="homeCard-title">
                                                                STOCK
                                                            </div>

                                                            <div className="homeCard-body">
                                                                <p>Manage Pharmacy Stock </p>
                                                            </div>

                                                        </div>

                                                        <div className="HomeBtn" >
                                                            <button style={{ marginTop: 30 ,width: 100 }} onClick={this.goToStore.bind(this)} > View</button>
                                                        </div>
                                                    </div>
                                                </Paper>
                                                <br />
                                            </Grid>

                                        }

{
                                            <Grid item key={""} xs={12} md={4} lg={3}> <br />
                                                <Paper style={{ width: 250,height: 350 }}>
                                                    <div className="homeCard" >
                                                        <div className="HomeimgCard" >

                                                            <img src={"https://media.istockphoto.com/photos/wireless-payment-by-card-picture-id536748069?k=20&m=536748069&s=612x612&w=0&h=kdSTdtPMO-wL5UNnbo3iwfYgDkqYc11dzrZ9kRD83yY="} alt="" />
                                                        </div>
                                                        <br/>
                                                        <div className="homeCard-content">

                                                            <div className="homeCard-title">
                                                               PAYMENTS
                                                            </div>

                                                            <div className="homeCard-body">
                                                                <p> Manage Your Payments </p>
                                                            </div>

                                                        </div>

                                                        <div className="HomeBtn" >
                                                            <button style={{ marginTop:30 ,width: 100 }} onClick={"#"} > View</button>
                                                        </div>
                                                    </div>
                                                </Paper>
                                                <br />
                                            </Grid>

                                        }

                                    </Grid>
                                </center>

</div>
                            </div>
                        </div>
                    </section>
                </header>
         <br></br><br></br><br></br><br></br><br></br><br></br></div></div>
        );

    }
}

export default Home;





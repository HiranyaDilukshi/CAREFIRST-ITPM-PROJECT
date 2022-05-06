import React, { Component } from 'react';
import axios from 'axios';
import ApexCharts from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';
import { colors } from '@material-ui/core';
import PropTypes from 'prop-types';
//import stockitems from '../../../../routes/stockitems';
import { Chart } from "react-google-charts";




class StockChart extends Component {
 
    constructor(props) {
        super(props);

        this.state = {
          stockitemAvailableQty: '',
      medicineName: '',

            flag:true,
          series: [{
            name: 'Medicine quantities',
            data: []  //series.data
          },],
          options: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '50%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: true
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Pendol', 'Sritone', 'aceclofenac tablet 100mg'], 
            },
            yaxis: {
              title: {
                text: 'Quantity'
              }
            },
            fill: {
              opacity: 1,
              colors : 'black',
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return val + " Avaialable Medicines"
                }
              }
            }
          }

         
         
           
         
          
        
        
        };
      }

      componentDidMount() {
        this.retrieveStockitems();
        
      }
      retrieveStockitems(){
         axios.get("http://localhost:8000/stockitems").then((res) => {
          this.setState({
            stockitems:res.data.existingStockitems
        });
            var stockitemAvailableQty = [];
            var mName = [];
            var i = 0;
            var j = 0;
        
            res.data.data(element => {
              stockitemAvailableQty[i] = element.stockitemAvailableQty; 
                i++;
            });
    
            this.setState (temp => ({
                series:[{
                    data:stockitemAvailableQty
                }]
            }))
    
    
            res.data(element => {
                mName[j] = element.medicineName; 
                j++;
            });
    
            this.setState (temp => ({
                options:{xaxis:{
                    categories:mName
                }}
            }))
    
    
        });
    
    }
    
      print(){
          window.print();
      }

    render() {
        return (
            <div class="section-to-print">
                
                <br/><br/><br/><br/><br/>
                <center>
                <h1 style={{fontWeight:"bold"}}> EVENTO 365 ITEM RENTING OVERVIEW </h1>
                </center>
                <center>
                    <div class="container">
                        <table style={{borderRadius:'20px',marginTop:'50px',border:'0px'}}>
                            <tr style={{height:'50px'}}>

                            </tr>
                            <tr style={{height:'100px'}}>
                                <center>
                                <h1> Overview of the rented item quantities</h1>
                                </center>
                            </tr>
                            <tr style={{height:'450px'}}>
                        <div class="reportStyle">
                            {this.state.flag==true?<div id="chart">
                            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
                            </div>:<div></div>}
                        </div>
                            </tr>
                            <tr style={{height:'100px'}}>
                           
                            </tr>
                        </table>
                    </div>
                    





                    <div style={{ paddingTop: '20px', background: 'rgb(169, 169, 169,0.5)', width: '75%' }}>
                        <h1 style={{ textAlign: 'left', marginTop: '10px', marginLeft: '30px', fontFamily: 'Jazz LET, fantasy' }}>Evento 365 Users by Gender.</h1>
                        <h3 style={{ textAlign: 'left', marginLeft: '30px', fontFamily: 'sans-serif', fontSize: '22px' }}>⠀Total Users : {this.state.maleCount + this.state.femaleCount} ⠀⠀|⠀⠀♔ Male : {this.state.maleCount} ⠀|⠀⠀♕ Female : {this.state.femaleCount}⠀</h3>
                        <Chart
                            width={'1500px'}
                            height={'550px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Store', 'Hours per Day'],
                                ['Male', this.state.stockitemAvailableQty],
                                ['Female', this.state.medicineName],

                            ]}
                            options={{

                                // Just add this option

                                pieSliceText: 'label',
                                pieStartAngle: 100,
                                backgroundColor: 'transparent',
                                colors:['#ef476f','#3d5a80']
                                
                            }}
                            rootProps={{ 'data-testid': '2' }}
                        />
                    </div>
                    <br /><br />
                     <div> <button class="btn btn-info" onClick={this.print} style={{marginTop:'30px',marginBottom:'30px',width:'200px',height:'50px' }}> Print</button> </div>
                </center>
            </div>    
    
        );
    }
}

export default StockChart;
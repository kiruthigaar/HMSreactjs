import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Sidebar from './Sidebar';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css'
import PieChart from './PieChart';
import LineChart from './LineChart';


const Dashboard = () => {
  return (
    <>
      <Container fluid="md" className='admincontainer'> 
    <Row><Col><div className='admin'>KPNR Medical Center and Hospital</div></Col></Row>
     
    
        <Row style = {{marginTop : "100px"}}>
            <Col sm={4}>
                <Sidebar />
            </Col>

             <Col sm={8} style = {{marginTop : "50px"}}>
             <div className='row'>
                <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 '>
                    <div className='d-flex justify content-between p-4 allign-items-center bg-white border border-secondary shadow-sm'>

                    <i className='bi bi-currency-dollar fs-1 text-warning'></i>
                    <div>
                        <span>Revenue</span>
                        <h2>800</h2>
                    </div>

                    </div>
                </div>
                <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 '>
                    <div className='d-flex justify content-between p-4 allign-items-center bg-white border border-secondary shadow-sm'>

                    <i className='bi bi-graph-up-arrow fs-1 text-danger'></i>
                    <div>
                        <span>Increase</span>
                        <h2>20%</h2>
                    </div>

                    </div>
                </div>
                <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 '>
                    <div className='d-flex justify content-between p-4 allign-items-center bg-white border border-secondary shadow-sm'>

                    <i className='bi bi-people fs-1 text-success'></i>
                    <div>
                        <span>Total Patients</span>
                        <h2>890</h2>
                    </div>

                    </div>
                </div>
                <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 '>
                    <div className='d-flex justify content-between p-4 allign-items-center bg-white border border-secondary shadow-sm'>

                    <i className='bi bi-person-check fs-1 text-success'></i>
                    <div>
                        <span>Total Doctors</span>
                        <h2>16</h2>
                    </div>

                    </div>
                </div>
            </div>
          
            <div className='row'>
                <div className='col-12 col-md-8 p-3'>
                    <PieChart/>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-md-8 p-3'>
                    <LineChart/>
                </div>

            </div>
             </Col>
                
             
        </Row>
    </Container>
    
    </>
  )
}

export default Dashboard

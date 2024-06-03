import React, { useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import HomeNav from './HomeNav';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom';

const PatientDetails = ({patientname, patientgender, mobile, patientemail, address, DOB, bloodgroup, setPatientName, setPatientgender, setMobile, setPatientemail, setAddress, setDob, setBloodgroup}) => {

    const navigate = useNavigate()

    const [patients, setPatients] = useState([])

    const handleSubmit = (event) => {
        console.log("hi")
        event.preventDefault()
      
        alert("You want to subbmit the form")
        const addPatient = {name : patientname , gender : patientgender, mobile, email : patientemail, address, DOB, blood_group : bloodgroup}
            
            axios.post('http://127.0.0.1:2000/patient/', addPatient)
            .then(response => {
                console.log(response.data)
                setPatients(response.data)
                setPatientName('')
                setPatientgender('')
                setMobile('')
                setPatientemail('')
                setAddress('')
                setDob('')
                setBloodgroup('')
                navigate(`/bookingslot/${response.data._id}`)
            })
            .catch(error => console.log(error))         
    };

  return (
    <div>
         <Row style = {{backgroundColor : "#c2d1c6"}}>
            <Col style = {{padding : "30px"}}>
            <h5 style = {{textAlign : "center"}}>KPNR Medical Centre and Hospital</h5>
            </Col>
        </Row>
        <Row>
            <Col>
            <HomeNav />
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col  md="auto" style = {{marginTop : "50px"}}>
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                        required
                        type="text"
                        placeholder="name"
                        value={patientname}
                        onChange={(e) => setPatientName(e.target.value)}
                        
                    />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Gender"
                        value = {patientgender}
                        onChange={(e) =>setPatientgender(e.target.value)}
                    />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Mobile Number"
                        value = {mobile}
                        onChange={(e) =>setMobile(e.target.value)}
                    />
                    </Form.Group>
                    </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Email" 
                        value = {patientemail}
                        onChange={(e) =>setPatientemail(e.target.value)}                      
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Address"
                        value = {address}
                        onChange={(e) =>setAddress(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>DOB</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="DOB"
                        value = {DOB}
                        onChange={(e) =>setDob(e.target.value)}
                        />
                    </Form.Group>
                    
                </Row>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Blood Group</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Blood Group"
                        value = {bloodgroup}
                        onChange={(e) =>setBloodgroup(e.target.value)}
                        />
                    </Form.Group>
                    <br></br>
                <Button type="submit">Submit form</Button>
            </Form>
             </Col>
                
             
        </Row>
    </div>
  )
}

export default PatientDetails

import React, { useState } from 'react'
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Sidebar from './Sidebar';
import Container from 'react-bootstrap/Container';

const EditPatient = ({patientname,patientgender,mobile,patientemail,address,DOB,bloodgroup,setPatientName,setPatientgender,setMobile,setPatientemail,setAddress,setDob,setBloodgroup}) => {
    const {id} = useParams();
    console.log(id)
    console.log(DOB)

    useEffect(() => {
        axios.get(`http://127.0.0.1:2000/patient/${id}/`)
        .then(response => {
            console.log(response)
            setPatientName(response.data.name)
            setPatientgender(response.data.gender)
            setMobile(response.data.mobile)
            setPatientemail(response.data.email)
            setAddress(response.data.address)
            setDob(response.data.DOB)
            setBloodgroup(response.data.blood_group)
            
        })
        .catch(error => console.log(error))
    },[])

    const handleSubmit = (event) => {
        event.preventDefault()
        const dataSet = {
            name : patientname,
            gender : patientgender,
            mobile : mobile,
            email : patientemail,
            address : address,
            DOB : DOB,
            blood_group : bloodgroup
        }
        if(confirm("You want to update the patient!") == true){
            axios.patch(`http://127.0.0.1:2000/patient/${id}/`, dataSet)
            .then(response => {
                alert("Your form has been updated sucessfully")
            })
            .catch(error => console.log(error))
        }
        setPatientName('')
        setPatientgender('')
        setMobile('')
        setPatientemail('')
        setAddress('')
        setDob('')
        setBloodgroup('')
        
    }

  return (
    <Container fluid="md" className='admincontainer'> 
    <Row><Col><div className='admin'>KPNR Medical Center and Hospital</div></Col></Row>
    <Row style = {{marginTop : "100px"}}>
            <Col sm={4}>
                <Sidebar />
            </Col>
            <Col sm={8} style = {{marginTop : "50px"}}>
                <Form onSubmit={handleSubmit} >
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
                        placeholder="gender"
                        value = {patientgender}
                        onChange={(e) =>setGender(e.target.value)}
                        
                    />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="mobile"
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
                        placeholder="email"
                        value = {patientemail}
                        onChange={(e) =>setPatientemail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="address"
                        value = {address}
                        onChange={(e) =>setAddress(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Date Of Birth</Form.Label>
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
                        placeholder="bloodgroup"
                        value = {bloodgroup}
                        onChange={(e) =>setBloodgroup(e.target.value)}
                        />
                    </Form.Group>
                    
                    <br></br>
                <Button type="submit">UPDATE</Button>
            </Form>
             </Col>
    </Row>
    </Container>
  )
}

export default EditPatient
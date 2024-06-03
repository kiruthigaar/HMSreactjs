import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Sidebar from './Sidebar';
import Container from 'react-bootstrap/Container';
import axios from 'axios';


function CreatePatient({patientname, patientgender, mobile, patientemail, address, DOB, bloodgroup, setPatientName, setPatientgender, setMobile, setPatientemail, setAddress, setDob, setBloodgroup}) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget;
  
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true)
    alert("You want to subbmit the form")
    const addPatient = {name : patientname , gender : patientgender, mobile, email : patientemail, address, DOB, blood_group : bloodgroup}
        
        axios.post('http://127.0.0.1:2000/patient/', addPatient)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
        setPatientName('')
        setPatientgender('')
        setMobile('')
        setPatientemail('')
        setAddress('')
        setDob('')
        setBloodgroup('')
};
 

  return (
    <>
    <Container fluid="md" className='admincontainer'> 
    <Row><Col><div className='admin'>KPNR Medical Center and Hospital</div></Col></Row>
     
    
        <Row style = {{marginTop : "100px"}}>
            <Col sm={4}>
                <Sidebar />
            </Col>

             <Col sm={8} style = {{marginTop : "50px"}}>
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
    </Container>
    
    </>
  );
}

export default CreatePatient;
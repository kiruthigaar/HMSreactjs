import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Sidebar from './Sidebar';
import Container from 'react-bootstrap/Container';
import axios from 'axios';


function CreateDoctor({name,gender,qualification,department,email,experience,contact,setName,setQualificaion,setGender,setDepartment,setEmail,setExperience,setContact,consultancyfee,setConsultancyfee}) {
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

    let addDoctor = {name ,gender, qualification ,department, experience, email,contact, consultancy_fee : consultancyfee}

        axios.post('http://127.0.0.1:2000/doctor/',addDoctor)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
        // navigate('/admin/login/doctors/')
        setName('')
        setGender('')
        setQualificaion('')
        setDepartment('')
        setExperience('')
        setEmail('')
        setContact('')
        setConsultancyfee('')
        
  }
    
  return (
    <>
    <Container fluid="md" className='admincontainer'> 
    <Row><Col><div className='admin'>KPNR Medical Center and Hospital</div></Col></Row>
     
    
        <Row style = {{marginTop : "100px"}}>
            <Col sm={4}>
                <Sidebar />
            </Col>

             <Col sm={8} style = {{marginTop : "50px"}}>
                <Form  onSubmit={handleSubmit}>
                    <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                        required
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        
                    />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="gender"
                        value = {gender}
                        onChange={(e) =>setGender(e.target.value)}
                        
                    />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Qualification</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Qualification"
                        value = {qualification}
                        onChange={(e) =>setQualificaion(e.target.value)}
                        
                    />
                    </Form.Group>
                    </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Department</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Department"
                        value = {department}
                        onChange={(e) =>setDepartment(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Exerience</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Exerience"
                        value = {experience}
                        onChange={(e) =>setExperience(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Email"
                        value = {email}
                        onChange={(e) =>setEmail(e.target.value)}
                        />
                    </Form.Group>
                    
                </Row>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Contact"
                        value = {contact}
                        onChange={(e) =>setContact(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Consultancy-fee</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Consultancy-fee"
                        value = {consultancyfee}
                        onChange={(e) =>setConsultancyfee(e.target.value)}
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

export default CreateDoctor;
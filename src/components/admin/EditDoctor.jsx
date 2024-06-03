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

const EditDoctor = ({name,gender,qualification,department,email,experience,contact,setName,setQualificaion,setGender,setDepartment,setEmail,setExperience,setContact,consultancyfee,setConsultancyfee}) => {
    const {id} = useParams();
    console.log(id)

    useEffect(() => {
        axios.get(`http://127.0.0.1:2000/doctor/${id}/`)
        .then(response => {
            setName(response.data.name)
            setGender(response.data.gender)
            setQualificaion(response.data.qualification)
            setDepartment(response.data.department)
            setExperience(response.data.experience)
            setEmail(response.data.email)
            setContact(response.data.contact)
            setConsultancyfee(response.data.consultancy_fee)
        })
        .catch(error => console.log(error))
    },[])

    const handleSubmit = (event) => {
        event.preventDefault()
        const dataSet = {
            name : name,
            gender : gender,
            qualification : qualification,
            department : department,
            experience : experience,
            email : email,
            contact : contact,
            experience : experience,
            consultancy_fee : consultancyfee
        }
        if(confirm("You want to update the doctor!") == true){
            axios.patch(`http://127.0.0.1:2000/doctor/${id}/`, dataSet)
            .then(response => {
                alert("Your form has been updated sucessfully")
            })
            .catch(error => console.log(error))
        }
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
                <Button type="submit">UPDATE</Button>
            </Form>
             </Col>
    </Row>
    </Container>
  )
}

export default EditDoctor

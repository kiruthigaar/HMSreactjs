import React from 'react'
import { useState ,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import axios from 'axios';

const Ourdoctor = () => {

    const [doctors, setDoctors] = useState([])
    
    useEffect(() => {
        axios.get('http://127.0.0.1:2000/doctor/')
        .then(response => {
            console.log(response)
            setDoctors(response.data)
            
        })
        .catch(error => console.log(error))
    },[])

    useEffect(() => {
        console.log(doctors)
    })

  return (
    <div>
        <Container id = "ourDoctors">
            <h2 style = {{textAlign: "center"}}>OUR DOCTOR</h2>
        <Row xs={1} md={3} className="g-4">
        {doctors.map(doctor => {
            return (
                <Col >
                <Card>
                    <Card.Body>
                    <Card.Title>{doctor.name}</Card.Title>
                    <Card.Text>
                            <p>Gender: <span>{doctor.gender}</span></p>
                            <p>Qualification: <span>{doctor.qualification}</span></p>
                            <p>Department: <span>{doctor.department}</span></p>
                            <p>Exerience: <span>{doctor.experience}</span></p>
                            <p>Email: <span>{doctor.email}</span></p>
                            <p>Contact: <span>{doctor.contact}</span></p>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            )
        })}
            
       
    </Row>
        </Container>
    </div>
  )
}

export default Ourdoctor

import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import HomeNav from '../homepage/HomeNav'
import Button from 'react-bootstrap/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import axios  from 'axios';
import {useNavigate} from 'react-router-dom'

const DoctorLogin = () => {
    const navigate = useNavigate()

    const [generateOTP , setGenerateOTP] = useState('')
    const [doctors, setDoctors] = useState([])
    const [contact, setContact] = useState('')

    const handleGenerateOTP = (e) => {
        e.preventDefault()
        const random = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1)
        console.log(random)
        setGenerateOTP(random)
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:2000/doctor/')
        .then(response => {
            setDoctors(response.data)
        })
        
        .catch(error => console.log(error))
    },[])

     

    const handleSubmit = (e) => {
        e.preventDefault()
        const mobileVerification = doctors.filter(doctor =>doctor.contact == contact)
        console.log(mobileVerification)
        if(mobileVerification.length === 0){
            console.log("Please enter tha valid mobile number")
        }
        else{
            navigate(`/doctorloginpage/${mobileVerification[0]._id}/`)
        }
    }

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
        <Container className='containertop'>
            <Row className="justify-content-md-center">
                <Col md="auto" className='phoneverification'>
                   <div>
                        <h3>KPNR Medical Centre and Hospital</h3>
                        <h6>Mobile Verification</h6>
                        <Box>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="mobile"
                            name="mobile"
                            autoComplete="mobile"
                            autoFocus
                            value = {contact}
                            onChange={(e) => setContact(e.target.value)}
                        />
                        <input 
                            type = "text"
                            value = {generateOTP}
                            />
                        <Button variant="primary" disabled = {!contact} onClick={handleGenerateOTP}>Generate OTP</Button><br></br>
                        <Button variant="primary" disabled = {!generateOTP} onClick={handleSubmit}>Submit</Button>
                        </Box>
                   </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default DoctorLogin
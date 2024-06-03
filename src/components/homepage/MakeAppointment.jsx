import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'
import HomeNav from './HomeNav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useDispatch } from 'react-redux'
import { Department} from '../slices/appointmentSlice'
import {Doctor} from '../slices/appointmentSlice'


const MakeAppointment = () => {
    const navigate = useNavigate()
    const AppointmentDispatch = useDispatch()

    const [departments, setDepartments] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState('')
    const [selectedDoctor, setSelectedDoctor] = useState('')
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:2000/department/')
        .then(response => {
            console.log(response)
            setDepartments(response.data)
        })
        .catch(error => console.log(error))
    },[])

    useEffect(() => {
        axios.get('http://127.0.0.1:2000/doctor/')
        .then(response => {
            setDoctors(response.data)
        })
        .catch(error => console.log(error))
    },[])

    const departmentDoctors = doctors.filter((doctor) => doctor.department === selectedDepartment)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(selectedDepartment,selectedDoctor)
        AppointmentDispatch(Department(selectedDepartment))
        AppointmentDispatch(Doctor(selectedDoctor))
        navigate('/phoneverification/')
    }
  return (
    <div >
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
            <Row>
                <Col>
                <div>
                    <Form.Select aria-label="Default select example" value = {selectedDepartment} onChange= {(e) => setSelectedDepartment(e.target.value)}>
                    <option>select</option>
                    {departments.map(department => <option >{department.department_name}</option>)}
                    </Form.Select>
                </div>
                </Col>
                <Col>
                <div>
                    <Form.Select aria-label="Default select example" disabled = {!selectedDepartment} value = {selectedDoctor} onChange= {(e) => setSelectedDoctor(e.target.value)}>
                    <option >select</option>
                    {departmentDoctors.map(departmentDoctor => <option >{departmentDoctor.name}</option>)}
                    </Form.Select>
                </div>
                </Col>
                <Col>
                    <Button disabled = {!selectedDoctor} onClick = {handleSubmit}>Submit</Button>
                </Col>
            </Row>
            
        </Container>

    </div>
  )
}

export default MakeAppointment

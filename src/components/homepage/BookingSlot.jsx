import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeNav from './HomeNav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom';

const BookingSlot = () => {

    const navigate = useNavigate()

    const {id} = useParams();
    console.log(id)

    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedSlot, setSelectedSlot] = useState('')
    const [doctors, setDoctors] = useState([])
    const [appointment, setAppointment] = useState([])
    const [patients, setPatients] = useState([])

    const appointments = useSelector(state => state.appointment)

    const handleSubmit = (e) => {
        e.preventDefault()
        const doctorName = doctors.find((doctor) => doctor.name === appointments[1])

        axios.get(`http://127.0.0.1:2000/appointment/doctor/${doctorName._id}`)
        .then(response => {
            setAppointment(response.data)
        })
        .catch(error => console.log(error))

        const doctorAppointment = appointment.filter((appoin) => {
                return (appoin.slot === selectedSlot) && ((appoin.date).slice(0, 10) == new Date(selectedDate).toISOString().slice(0, 10))
        })
        console.log(doctorAppointment)
        if(doctorAppointment.length <= 10){
            alert("your Appointment booked")

            const dataSet = {
                doctor: doctorName._id, patient: id,  date : new Date(selectedDate).toISOString() , slot : selectedSlot
            }

            axios.post('http://127.0.0.1:2000/appointment/', dataSet)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
        }
        else{
            alert("please change the slot and date")
        }
        navigate('/')
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:2000/doctor/')
        .then(response => {
            setDoctors(response.data)
        })
        .catch(error => console.log(error))
    },[])

    useEffect(() => {
        axios.get('http://127.0.0.1:2000/patient/')
        .then(response => {
            setPatients(response.data)
        })
        .catch(error => console.log(error))
    },[])

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
                    <Row >
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>Doctor</Form.Label>
                        <Form.Control
                        required
                        type="text"
                        value ={appointments[1]}
                        placeholder="doctorname"
                        
                    />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Department</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        value ={appointments[0]}
                        placeholder="Department"
                    />
                    </Form.Group>
                    </Row>
                   
                    <Row style = {{marginTop : "20px"}}>
                        <Col md="auto">
                            <Form.Select aria-label="Default select example" value = {selectedSlot} onChange= {(e) => setSelectedSlot(e.target.value)}>
                            <option>Select the Slot</option>
                            <option value="9AM to 12PM">"9AM to 12PM"</option>
                            <option value="2PM to 6PM">"2PM to 6PM"</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <DatePicker 
                                selected = {selectedDate}
                                onChange = {date => setSelectedDate(date)}
                                minDate={new Date()}
                                dateFormat="yyyy-MM-dd"
                                // filterDate={Date => Date.getDate() != new Date()}
                                scrollableMonthYearDropdown
                                showYearDropdown
                            />
                        </Col>
                    </Row>
                    <Button type="submit" style = {{marginTop : "20px"}}>Check Availability and book appointment</Button>
                </Form>
            </Col>
        </Row>
    </div>
  )
}

export default BookingSlot

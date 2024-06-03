import React from 'react'
import Table from 'react-bootstrap/Table';
import { useState ,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from './Sidebar';
import axios from 'axios';
import {Link} from 'react-router-dom'

const PatientsList = () => {

    const [patients, setPatients] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:2000/patient/')
        .then(response => {
            console.log(response)
            setPatients(response.data)
            
        })
        .catch(error => console.log(error))
    },[])

    const handleDeletePatient = (id) => {
        if(confirm("You want to delete the patient!") == true){
            axios.delete(`http://127.0.0.1:2000/patient/${id}`)
            .then(response => {
                const deletedPatient = patients.filter((patient) => patient._id !== id)
                setPatients(deletedPatient)
            })
            .catch(error => console.log(error))
        }
    }

    const result = patients.map((patient) => {
        return (
            <tr key = {patient._id}>
                <td>{patient.name}</td>
                <td>{patient.gender}</td>
                <td>{patient.mobile}</td>
                <td>{patient.email}</td>
                <td>{patient.address}</td>
                <td>{patient.DOB}</td>
                <td>{patient.blood_group}</td>
                <Link to = {`/admin/loginpage/editpatient/${patient._id}/`}><td>edit</td></Link>
                <td onClick={() => handleDeletePatient(patient._id)}>delete</td>
            </tr>
        )
    })

  return (
    <div>
       
    <Row><Col><div className='admin'>KPNR Medical Center and Hospital</div></Col></Row>
        <Row style = {{marginTop : "100px"}}>
            <Col sm={3}>
                <Sidebar />
            </Col>
            <Col sm={8} style = {{marginTop : "50px"}}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Patient Name</th>
                    <th>Gender</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>DOB</th>
                    <th>Blood Group</th>
                    <th>edit</th>
                    <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {result}
                </tbody>
            </Table>
            </Col>
        </Row >
    </div>
  )
}

export default PatientsList

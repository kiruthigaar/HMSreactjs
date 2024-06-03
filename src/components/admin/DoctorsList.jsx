import React from 'react'
import { useState ,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from './Sidebar';
import axios from 'axios';
import {Link} from 'react-router-dom'
import doctor1 from '../images/doctor1.jpg'


const DoctorsList = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:2000/doctor/')
        .then(response => {
            console.log(response)
            setDoctors(response.data)
            
        })
        .catch(error => console.log(error))
    },[])

    const handleDeleteDoctor = (id) => {
      
      if(confirm("You want to delete the doctor!") == true){
        axios.delete(`http://127.0.0.1:2000/doctor/${id}`)
        .then(response => {
            const deletedDoctor = doctors.filter((doctor) => doctor._id !== id)
            setDoctors(deletedDoctor)
        })
        .catch(error => console.log(error))
        }
  }
  return (
    <div>
      {/* <Container fluid="md" className='admincontainer'>  */}
      <Row><Col><div className='admin'>KPNR Medical Center and Hospital</div></Col></Row>
            <Row style = {{marginTop : "100px"}}>
               <Row md={4}>
                <Col sm={4}>
                    <Sidebar />
                </Col>
                </Row>
            {/* <Row > */}
                {doctors.map(doctor => { return (
                        <Row  className='doctorscard'>
                        <Col sm={5}>
                        <div style={{width: "18rem;"}}>
                        <div className="card-body">
                            <h2 style={{marginBottom: "20px"}} className="card-title">{doctor.name}</h2>
                            <p>Gender: <span>{doctor.gender}</span></p>
                            <p>Qualification: <span>{doctor.qualification}</span></p>
                            <p>Department: <span>{doctor.department}</span></p>
                            <p>Exerience: <span>{doctor.experience}</span></p>
                            <p>Email: <span>{doctor.email}</span></p>
                            <p>Contact: <span>{doctor.contact}</span></p>
                            <p>Consultancy-fee: <span>{doctor.consultancy_fee}</span></p>
                            <Link to = {`/admin/loginpage/editdoctor/${doctor._id}/`}><a href="#" className="card-link">Edit </a></Link>
                            <a href="#" className="card-link" onClick={() => handleDeleteDoctor(doctor._id)}>Delete</a>
                        </div>
                        </div>
                        </Col>
                        <Col sm={4}>
                        <img class="card-img-top" src={doctor1} alt="Card image cap" style = {{width:"300px",height:"300px", padding:"20px"}} />
                       </Col>
                       </Row>)
                    })} 
        
                
               
               {/* </Row> */}
               
            </Row>
      {/* </Container> */}
    </div>
  )
}

export default DoctorsList

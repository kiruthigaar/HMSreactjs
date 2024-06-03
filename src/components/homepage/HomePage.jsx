import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'
import CarouselImage from './Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Contactus from './Contactus';
import AboutUs from './AboutUs';
import HomeNav from './HomeNav';
import Sidemenu from './Sidemenu';
import Ourdoctor from './Ourdoctor';

const HomePage = () => {
  const navigate = useNavigate()

  const makeAppointment = (e) => {
    e.preventDefault()
    navigate('/makeappointment/')

  }
  return (
  <>
   
      <Row style = {{backgroundColor : "#c2d1c6"}}>
        <Col style = {{padding : "30px"}}>
          <h5 style = {{textAlign : "center"}}>KPNR Medical Centre and Hospital</h5>
        </Col>
        {/* <Col md="auto">Variable width content</Col> */}
        <Col xs lg="2" style = {{padding : "23px"}}> 
          <Sidemenu />
        </Col>
      </Row>
      <Row>
        <Col>
          <HomeNav />
        </Col>
      </Row>
      <Row>
        <Col>
          <Container>
            <CarouselImage />
          </Container>
        </Col>
      </Row>
      <Row>
        <Ourdoctor />
      </Row>
      <Row>
        <AboutUs />
      </Row>
      <Row>
        <Contactus />
      </Row>
   </>
  )
}

export default HomePage

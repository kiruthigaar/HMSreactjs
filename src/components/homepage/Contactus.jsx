import Container from 'react-bootstrap/Container';
import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import qrcode from '../images/qrcode.png'

const Contactus = () => {
  return (
    <div className='containertop'>
      <Container id = "contactus">
        <Row>
            <Col>
            <div style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>CONTACT US</Card.Title>
                    <Card.Text>
                    <br></br>
                    Plot No 14, Annai Velankanni Nagar,
                    6th Cross Street, Phase I,
                    Madhananthapuram,
                    Chennai - 600125
                    <br></br><br></br>
                    Phone : 9444362677, 9841269055, 8778346802
                    <br></br><br></br>
                    Email : kpnrclinic@gmail.com
                    <br></br>
                    </Card.Text>
                </Card.Body>
            </div>
            <div style = {{width : "100px"}}>
                <img style = {{width : "100%"}} src = {qrcode} alt = "qrcode"/>
            </div>
            
            </Col>
            <Col >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15546.961865846766!2d80.20110207880269!3d13.052185049815648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266bf5a08c45f%3A0x9478e1cd7e7f1723!2sVadapalani%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1715784737360!5m2!1sen!2sin" 
                    width="100%" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contactus

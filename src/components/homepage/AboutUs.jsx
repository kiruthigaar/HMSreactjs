import { Container } from '@mui/material'
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const AboutUs = () => {
  return (
    <div className='containertop'>
      <Container id = "aboutus">
        <Row>
            <Col>
                <h2 style = {{textAlign: "center"}}>ABOUT US</h2>
                <div style = {{marginTop: "30px"}}>
                    <p style = {{fontSize: "large"}}>KPNR Hospital,a quaternary care,multispecialty hospital, has been at the cutting edge of medicine while staying true to its charitable mission and providing advanced yet affordable healthcare since 1974.  

                                                    KPNR Hospital, run by K.Govindaswamy Naidu Medical Trust, was founded in 1974 by 'Dharmaveera' K.Govindaswamy Naidu, a leading industrialist and philanthropist from Annur village in Coimbatore district. 

                                                    Dr G.Bakthavathsalam (MS, FICS, FCCP, FAMS), the Managing Trustee and Chairman of KG Hospital, has grown the hospital organically from a 10-bed hospital in 1974 to the state-of-the-art healthcare provider it is today.  For his service to society, Dr Bakthavathsalam (fondly known as Dr GB) has received numerous coveted awards including Padma Shri Award from the President of India and Dr B.C.Roy Award from the Prime Minister of India.</p>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutUs

import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from './Sidebar';

const AdminPage = () => {
  return (
    <div>
        <Row><Col><div className='admin'>Admin Page</div></Col></Row>
        <Row style = {{marginTop : "100px"}}>
          <Sidebar />
        </Row>
    </div>
  )
}

export default AdminPage

import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const Sidemenu = () => {

    const handleAdmin = () => {
        e.preventDefault()
        navigate('/admin/')
    }

    const handlePatient = () => {
        e.preventDefault()
        navigate('/patientlogin/')
    }

    const handleDoctor = () => {
        e.preventDefault()
        navigate('/doctorlogin/')
    }
  return (
    <div>
       <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Accounts
        </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/admin/" onClick = {handleAdmin}>Admin login</Dropdown.Item>
                <Dropdown.Item href="/doctorlogin/" onClick = {handleDoctor}>Doctor login</Dropdown.Item>
                <Dropdown.Item href="/patientlogin/" onClick = {handlePatient}>Patient login</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default Sidemenu

import React from 'react'
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
// import ContentCut from '@mui/icons-material/ContentCut';
// import ContentCopy from '@mui/icons-material/ContentCopy';
// import ContentPaste from '@mui/icons-material/ContentPaste';
// import Cloud from '@mui/icons-material/Cloud';
import {useNavigate} from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate()

    const handleDashboard =(e)=>{
        e.preventDefault()
        navigate('/admin/loginpage/dashboard/')
    }

    const handleDoctorsList =(e)=>{
        e.preventDefault()
        navigate('/admin/loginpage/doctorslist/')
    }

    const handleCreateDoctor =(e)=>{
        e.preventDefault()
        navigate('/admin/loginpage/createdoctor/')
    }
   
    const handlePatientsList =(e)=>{
        e.preventDefault()
        navigate('/admin/loginpage/patientsList/')
    }

    const handleCreatePatient =(e)=>{
        e.preventDefault()
        navigate('/admin/loginpage/createpatient/')
    }

    const handleAppointment =(e)=>{
        e.preventDefault()
        navigate('/admin/loginpage/appointment/')
    }


    const handleLogout =(e)=>{
        e.preventDefault()
        navigate('/admin/')
    }
  return (
    <Paper sx={{ width: 320, maxWidth: '100%' , height:"100vh", float: "left", position: "fixed", zIndex: "1", borderRight: "1px solid", borderColor: "#c2c7cf" , backgroundColor: "#c2c7cf"}}>
                    <MenuList  sx={{padding: "20px"}}>
                    <MenuItem onClick={(e) =>handleDashboard(e)} >
                    <ListItemIcon >
                        {/* <ContentCut fontSize="small" /> */}
                    </ListItemIcon>
                    <ListItemText>Dashboard</ListItemText>
                    
                    </MenuItem>
                    <MenuItem onClick={(e) =>handleDoctorsList(e)}>
                    <ListItemIcon >
                        {/* <ContentCopy fontSize="small" /> */}
                    </ListItemIcon>
                    <ListItemText>Doctors List</ListItemText>
                    
                    </MenuItem>
                    <MenuItem onClick={(e) =>handlePatientsList(e)}>
                    <ListItemIcon>
                        {/* <ContentPaste fontSize="small" /> */}
                    </ListItemIcon>
                    <ListItemText>Patient List</ListItemText>
                    
                    </MenuItem>
                    <MenuItem onClick={(e) =>handleCreateDoctor(e)}>
                    <ListItemIcon >
                        {/* <ContentPaste fontSize="small" /> */}
                    </ListItemIcon>
                    <ListItemText>Create Doctor</ListItemText>
                    
                    </MenuItem>
                    <MenuItem onClick={(e) =>handleCreatePatient(e)}>
                    <ListItemIcon>
                        {/* <ContentPaste fontSize="small" /> */}
                    </ListItemIcon>
                    <ListItemText>Create Patient</ListItemText>
                    
                    </MenuItem>
                    <MenuItem onClick={(e) =>handleAppointment(e)}>
                    <ListItemIcon>
                        {/* <ContentPaste fontSize="small" /> */}
                    </ListItemIcon>
                    <ListItemText>Appointment</ListItemText>
                    
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={(e) =>handleLogout(e)}>
                    <ListItemIcon>
                        {/* <Cloud fontSize="small" /> */}
                    </ListItemIcon>
                    <ListItemText>Log Out</ListItemText>
                    </MenuItem>
                </MenuList>
            </Paper>
  )
}

export default Sidebar

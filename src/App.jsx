import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'

import { useState } from 'react';
import DoctorsList from './components/admin/DoctorsList'
import CreateDoctor from './components/admin/CreateDoctor';
import axios from 'axios';
import PatientsList from './components/admin/PatientsList';

import HomePage from './components/homepage/HomePage';
import MakeAppointment from './components/homepage/MakeAppointment';
import AdminLogin from './components/admin/AdminLogin';
import AdminPage from './components/admin/AdminPage';
import CreatePatient from './components/admin/CreatePatient';
import EditDoctor from './components/admin/EditDoctor';
import CarouselImage from './components/homepage/Carousel';
import Contactus from './components/homepage/Contactus';
import AboutUs from './components/homepage/AboutUs';
import HomeNav from './components/homepage/HomeNav';
import PhoneVerification from './components/homepage/PhoneVerification';
import PatientDetails from './components/homepage/PatientDetails';
import BookingSlot from './components/homepage/BookingSlot';
import { store } from './components/store.js'
import {Provider} from 'react-redux'
import Sidemenu from './components/homepage/Sidemenu.jsx';
import PatientLogin from './components/patient/PatientLogin.jsx';
import Ourdoctor from './components/homepage/Ourdoctor.jsx';
import PatientLoginPage from './components/patient/PatientLoginPage.jsx';

import Appointment from './components/admin/Appointment.jsx';
import Chart from './components/admin/Chart.jsx';
import Dashboard from './components/admin/Dashboard.jsx';
import DoctorLogin from './components/doctor/DoctorLogin.jsx';
import DoctorLoginPage from './components/doctor/DoctorLoginPage.jsx';
import EditPatient from './components/admin/EditPatient.jsx';


function App() {

  const navigate = useNavigate()
 
  const [name , setName] = useState('')
  const [gender , setGender] = useState('')
  const [qualification , setQualificaion] = useState('')
  const [department , setDepartment] = useState('')
  const [experience , setExperience] = useState('')
  const [email , setEmail] = useState('')
  const [contact , setContact] = useState('')
  const [consultancyfee , setConsultancyfee] = useState('')

  const [doctors, setDoctors] = useState([])
  const [patients, setPatients] = useState([])

  const [patientname ,setPatientName] = useState('')
  const [patientgender ,setPatientgender] = useState('')
  const [mobile ,setMobile] = useState('')
  const [patientemail ,setPatientemail] = useState('')
  const [address ,setAddress] = useState('')
  const [DOB ,setDob] = useState('')
  const [bloodgroup ,setBloodgroup] = useState('')

 
  return (
    <Provider store = {store}>
    <>
    <div >
      <Routes>
        <Route path="/ourdoctor/" element = {<Ourdoctor />}></Route>
        <Route path="/patientlogin/" element = {<PatientLogin />}></Route>
        <Route path="/doctorlogin/" element = {<DoctorLogin />}></Route>
        <Route path="/sidemenu/" element = {<Sidemenu />}></Route>
        <Route path="/admin/" element = {<AdminLogin />}></Route>
        <Route path="/admin/loginpage/" element = {<AdminPage />}></Route>
        <Route path="/admin/loginpage/dashboard/" element = {<Dashboard />}></Route>
        <Route path="/admin/loginpage/appointment" element = {<Appointment />}></Route>
        <Route path="/admin/loginpage/doctorslist/" element = {<DoctorsList />}></Route>
        <Route path="/admin/loginpage/createdoctor/" element = {<CreateDoctor 
                                                                name = {name}
                                                                 gender = {gender}
                                                                 qualification = {qualification} 
                                                                 department = {department}
                                                                 experience = {experience}
                                                                 email = {email}
                                                                 contact = {contact}
                                                                 consultancyfee = {consultancyfee}
                                                                 setName = {setName}
                                                                 setGender = {setGender}
                                                                 setQualificaion = {setQualificaion}
                                                                 setDepartment = {setDepartment}
                                                                 setEmail = {setEmail}
                                                                 setExperience = {setExperience}
                                                                 setContact = {setContact}
                                                                 setConsultancyfee = {setConsultancyfee}/>}></Route>
        <Route path="/admin/loginpage/patientsList/" element = {<PatientsList/>}></Route>
        <Route path="/admin/loginpage/createpatient/" element = {<CreatePatient
                                                                patientname = {patientname}
                                                                patientgender = {patientgender}
                                                                mobile = {mobile}
                                                                patientemail = {patientemail}
                                                                address = {address}
                                                                DOB = {DOB}
                                                                bloodgroup = {bloodgroup}
                                                                setPatientName = {setPatientName}
                                                                setPatientgender = {setPatientgender}
                                                                setMobile = {setMobile}
                                                                setPatientemail = {setPatientemail}
                                                                setAddress = {setAddress}
                                                                setDob = {setDob}
                                                                setBloodgroup = {setBloodgroup}
                                                                />}></Route>
        <Route path = "/admin/loginpage/editdoctor/:id/" element = {<EditDoctor 
                                                                    name = {name}
                                                                    gender = {gender}
                                                                    qualification = {qualification} 
                                                                    department = {department}
                                                                    experience = {experience}
                                                                    email = {email}
                                                                    contact = {contact}
                                                                    consultancyfee = {consultancyfee}
                                                                    setName = {setName}
                                                                    setGender = {setGender}
                                                                    setQualificaion = {setQualificaion}
                                                                    setDepartment = {setDepartment}
                                                                    setEmail = {setEmail}
                                                                    setExperience = {setExperience}
                                                                    setContact = {setContact}
                                                                    setConsultancyfee = {setConsultancyfee}/>}></Route> 
        <Route path = "/admin/loginpage/editpatient/:id/" element = {<EditPatient patientname = {patientname}
                                                                                patientgender={patientgender}
                                                                                mobile = {mobile}
                                                                                patientemail = {patientemail}
                                                                                address ={address}
                                                                                DOB = {DOB}
                                                                                bloodgroup = {bloodgroup}
                                                                                setPatientName = {setPatientName}
                                                                                setPatientgender = {setPatientgender}
                                                                                setMobile = {setMobile}
                                                                                setPatientemail = {setPatientemail}
                                                                                setAddress = {setAddress}
                                                                                setDob = {setDob}
                                                                                setBloodgroup = {setBloodgroup}/>}></Route>                                                                                                                   
                                                                                                                                                                                             
        <Route path="/" element = {<HomePage/>}></Route>
        <Route path="/makeappointment/" element = {<MakeAppointment />}></Route> 
        <Route path="/contactus/" element = {<Contactus />}></Route>  
        <Route path="/aboutus/" element = {<AboutUs />}></Route> 
        <Route path="/homenav/" element = {<HomeNav />}></Route>
        <Route path="/phoneverification/" element = {<PhoneVerification />}></Route>
        <Route path="/patientdetails/" element = {<PatientDetails 
                                                            patientname = {patientname}
                                                            patientgender = {patientgender}
                                                            mobile = {mobile}
                                                            patientemail = {patientemail}
                                                            address = {address}
                                                            DOB = {DOB}
                                                            bloodgroup = {bloodgroup}
                                                            setPatientName = {setPatientName}
                                                            setPatientgender = {setPatientgender}
                                                            setMobile = {setMobile}
                                                            setPatientemail = {setPatientemail}
                                                            setAddress = {setAddress}
                                                            setDob = {setDob}
                                                            setBloodgroup = {setBloodgroup}
                                                            />}></Route> 
        <Route path="/bookingslot/:id" element = {<BookingSlot />}></Route> 
        <Route path="/patientlogin/" element = {<PatientLogin />}></Route>
        <Route path="/patientloginpage/:id" element = {<PatientLoginPage />}></Route>
        <Route path="/doctorloginpage/:id" element = {<DoctorLoginPage />}></Route>
        <Route path="/charts/" element = {<Chart />}></Route>
       
        {/* <Route path="/admin/loginpage/'" element = {<AdminNav />}></Route>
        <Route path = '/admin/login/doctors/' element = {<DoctorsList 
                                                              doctors = {doctors}
                                                              setDoctors = {setDoctors}/>}></Route>
         <Route path = '/admin/login/createdoctor/' element = {<CreateDoctor 
                                                                 name = {name}
                                                                 gender = {gender}
                                                                 qualification = {qualification} 
                                                                 department = {department}
                                                                 experience = {experience}
                                                                 email = {email}
                                                                 contact = {contact}
                                                                 consultancyfee = {consultancyfee}
                                                                 setName = {setName}
                                                                 setGender = {setGender}
                                                                 setQualificaion = {setQualificaion}
                                                                 setDepartment = {setDepartment}
                                                                 setEmail = {setEmail}
                                                                 setExperience = {setExperience}
                                                                 setContact = {setContact}
                                                                 setConsultancyfee = {setConsultancyfee}
                                                                 handleSumbit = {handleSumbit}
                                                                  />}></Route>

          <Route path = '/admin/login/patients/' element = {<PatientsList 
                                                              patients = {patients}
                                                              setPatients = {setPatients}/>}></Route>
           <Route path = '/admin/login/createpatient/' element = {<CreatePatients 
                                                                      patients = {patients}
                                                                      setPatients = {setPatients}
                                                                      patientname = {patientname}
                                                                      patientgender = {patientgender}
                                                                      mobile = {mobile}
                                                                      patientemail = {patientemail}
                                                                      address = {address}
                                                                      DOB = {DOB}
                                                                      bloodgroup = {bloodgroup}
                                                                      setPatientName = {setPatientName}
                                                                      setPatientgender = {setPatientgender}
                                                                      setMobile = {setMobile}
                                                                      setPatientemail = {setPatientemail}
                                                                      setAddress = {setAddress}
                                                                      setDob = {setDob}
                                                                      setBloodgroup = {setBloodgroup}/>}></Route>  

          <Route path="/" element = {<HomePage/>}></Route>
          <Route path="/makeappointment/" element = {<MakeAppointment />}></Route>                                                                                                                                                             */}
      </Routes>
      </div>
    </>
    </Provider>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import DatePicker from 'react-datepicker'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useParams } from 'react-router-dom';

const DoctorPage = () => {
    const {id} = useParams();

    const [selectedSlot, setselectedSlot] = useState('')
    const [selectedDate, setSelectedDate] = useState(null)
    const [patientList, setPatientList] = useState([])
    const [patientData, setPatientData] = useState([])
    const [appointments , setAppointments]= useState([])
   
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

   
    const columns = [
        { id: 'patientName', label: 'PATIENT NAME', minWidth: 170 },
        
        {
          id: 'slot',
          label: 'SLOT',
          minWidth: 100,
          
        },
        {
          id: 'date',
          label: 'DATE',
          minWidth: 170,
         
        }
     ];

      const handleSubmit = (e) => {

        e.preventDefault()

          axios.get(`http://127.0.0.1:2000/appointment/${id}`)
          .then(response =>{
            console.log(response.data)
            setAppointments(response.data)
          })
     
    }

    useEffect(() => {
        const selectedData = appointments.filter((patient) => (((patient.date).slice(0,10)) == new Date(selectedDate).toISOString().slice(0,10)) && (patient.slot == selectedSlot ))
        console.log(selectedData)
        setPatientData(selectedData)
      },[appointments])

  return (
    <Container fluid="md" className='admincontainer'> 
    <Row><Col><div className='admin'>KPNR Medical Center and Hospital</div></Col></Row>
    <Row style = {{marginTop : "100px"}}>
            {/* <Col sm={4}>
                <Sidebar />
            </Col> */}

             <Col style = {{marginTop : "50px", marginLeft: "100px"}}>
                <Row>
                <Col>
                <div>
                    <label>Slot</label><br></br><br></br>
                    <Form.Select aria-label="Default select example" value = {selectedSlot} onChange= {(e) => setselectedSlot(e.target.value)}>
                    <option>select</option>
                    <option>9AM to 12PM</option>
                    <option>2PM to PM</option>
                    </Form.Select>
                </div>
                </Col>
                
                <Col>
                    <label>Date</label><br></br><br></br>
                    <DatePicker 
                        selected = {selectedDate}
                        onChange = {date => setSelectedDate(date)}
                        dateFormat="yyyy-MM-dd"
                        
                        scrollableMonthYearDropdown
                        showYearDropdown
                    />
                </Col>
                <Col>
                    <br></br><br></br><Button disabled = {!selectedDate} onClick = {handleSubmit}>Submit</Button>
                </Col>
                </Row>
                <Row>
                <Container>
                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    >
                                    {column.label}
                                    </TableCell>
                                ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {patientData.length != 0 ? patientData.map((data, i) => {
                                return (
                                    <TableRow key = {i}>
                                    {
                                        
                                    columns && columns.map((column , j) => {
                                        let values = patientData[i];
                                        let currentVal = patientData[i][column.id];
                                        return (
                                        <TableCell key={currentVal} >
                                            {console.log(currentVal)}
                                            {currentVal}
                                        </TableCell>
                                        );
                                        }
                                        
                                    )}
                                    </TableRow>
                                )
                                }) : <div>NO Patients Found</div>}
                            </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            // count={appointmentDetails.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                        </Paper>
                </Container>
                </Row>
             </Col>
    </Row>
        </Container>
  )
}


export default DoctorPage
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import HomeNav from '../homepage/HomeNav'
import Sidemenu from '../homepage/Sidemenu';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Container } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const columns = [
  { id: 'doctorName', label: 'DOCTOR NAME', minWidth: 170 },
  { id: 'doctorDepartment', label: 'DEPARTMENT', minWidth: 50 },
  {
    id: 'slot',
    label: 'SLOT',
    minWidth: 100,
   
  },
  {
    id: 'date',
    label: 'DATE',
    minWidth: 170,
  
  },
  {
    id: 'consultingFee',
    label: 'CONSULTING-FEE',
    minWidth: 170,
   
  },
];


const PatientLoginPage = () => {

  const {id} = useParams()

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [appointmentDetails, setAppointmentDetails] = React.useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  React.useEffect(() => {
    axios.get(`http://127.0.0.1:2000/patient/patientlogin/${id}`)
    .then(response => {
        console.log(response.data)
        setAppointmentDetails(response.data)
    })
    .catch(error => console.log(error))
  },[])

  return (
    <div>
     <Row style = {{backgroundColor : "#c2d1c6"}}>
        <Col style = {{padding : "30px"}}>
          <h5 style = {{textAlign : "center"}}>KPNR Medical Centre and Hospital</h5>
        </Col>
       
        <Col xs lg="2" style = {{padding : "23px"}}> 
          <Sidemenu />
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <HomeNav />
        </Col>
      </Row> */}
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
                {appointmentDetails && appointmentDetails.map((appointmentDetail, i) => {
                  return (
                    <TableRow key = {i}>
                      {
                        
                      columns && columns.map((column , j) => {
                        let values = appointmentDetails[i];
                        let currentVal = appointmentDetails[i][column.id];
                        return (
                          <TableCell key={currentVal} >
                            {currentVal}
                          </TableCell>
                        );
                        }
                        
                      )}
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={appointmentDetails.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
    </Container>
    </div>
  )
}

export default PatientLoginPage

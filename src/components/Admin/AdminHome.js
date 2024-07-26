import React, { useEffect, useState } from 'react';
import './AdminHome.css';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useNavigate } from 'react-router-dom';
import { collegeListApi, userListApi } from '../Services/Allapis';
import Pagination from '@mui/material/Pagination';

function AdminHome() {
  const [collegeList, setCollegeList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [collegePage, setCollegePage] = useState(1);
  const [userPage, setUserPage] = useState(1);
  const itemsPerPage = 5;

  const navigate = useNavigate()

    const [colleges, setColleges] = useState([]);

    const Studentspage = async (id) => {
        navigate(`/admin-collegestudents/${id}`)
    }

    const getCollegeList = async () => {

        const result = await collegeListApi();
        console.log(result.data);
        setColleges(result.data);
    }

    useEffect(() => {
        getCollegeList()
    }, []);

  // const getCollegeList = async () => {
  //   if (localStorage.getItem('token')) {
  //     const token = localStorage.getItem('token');
  //     const reqHeader = {
  //       Authorization: `Token ${token}`,
  //     };
  //     const result = await collegeListApi(reqHeader);
  //     setCollegeList(result.data);
  //   }
  // };

  // const getUserList = async () => {
  //   if (localStorage.getItem('token')) {
  //     const token = localStorage.getItem('token');
  //     const reqHeader = {
  //       Authorization: `Token ${token}`,
  //     };
  //     const result = await userListApi(reqHeader); 
  //     setUserList(result.data);
  //   }
  // };

  // useEffect(() => {
  //   // getUserList();
  //   // getCollegeList();
  // }, []);

  const handleCollegePageChange = (event, value) => {
    setCollegePage(value);
  };

  const handleUserPageChange = (event, value) => {
    setUserPage(value);
  };

  const paginatedCollegeList = collegeList.slice((collegePage - 1) * itemsPerPage, collegePage * itemsPerPage);
  const paginatedUserList = userList.slice((userPage - 1) * itemsPerPage, userPage * itemsPerPage);

  return (
    <div className='body1'>
      <Row>
        <Col md={3}>
          <CDBSidebar className='asideBody' style={{ backgroundColor: "#212122" }}>
            <CDBSidebarHeader prefix={<i className="fa fa-bars" />} className='text-center'>
              <h4 className='mt-2'>
                <b>
                  <span>Admin</span>
                </b>
              </h4>


            </CDBSidebarHeader>
            <CDBSidebarContent>
              <CDBSidebarMenu>
                <Link style={{ textDecoration: "none" }} to="/admin-event">
                  <CDBSidebarMenuItem icon='book'>Events</CDBSidebarMenuItem>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/admin-winner">
                  <CDBSidebarMenuItem icon='book'>Add Winners</CDBSidebarMenuItem>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/admin-winnerview">
                  <CDBSidebarMenuItem icon='book'>Winners</CDBSidebarMenuItem>
                </Link>


                
                
              </CDBSidebarMenu>
            </CDBSidebarContent>
            <CDBSidebarFooter style={{ textAlign: 'center' }}>
              <div className="sidebar-btn-wrapper ms-3" style={{ padding: '20px 5px' }}></div>
            </CDBSidebarFooter>
          </CDBSidebar>
        </Col>
        <Col md={9}>
          <Navbar style={{ backgroundColor: "#000000" }} className='nav1'>
            <Container>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <Stack direction="row" className='me-5'>
                    <Avatar>L</Avatar>
                  </Stack>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Row className="justify-content-center mt-4">
            <Col md={6}>
              <div className='text-center ' style={{ backgroundColor: "#000000", borderRadius: "40px" }}>
                
                <div className='pt-3' style={{marginLeft:"-350px",backgroundColor:"white",width:"1000px", borderRadius: "40px" }}>
                  <h4 style={{fontSize:"38px", color:"black"}}>College List</h4>
                  <Table style={{backgroundColor:"",width:"1000px" }}  className='text-center mt-3 '>

                <thead>
                    <tr  >
                        <th>Id</th>
                        <th>College Name</th>
                        <th>Students</th>

                    </tr>
                </thead>
                <tbody>
                    {colleges.map((college, index) => (
                        <tr key={index}>
                            <td>{college.id}</td>
                            <td>{college.first_name}</td>
                            <td ><button onClick={()=>{
                                Studentspage(college.id)
                            }} className='btn btn-outline-primary  ' style={{width:"400px"}}>View Students</button></td>


                        </tr>
                    ))}
  
                </tbody>
            </Table>
                  {/* <TableContainer component={Paper} className='mt-4'>
                    <Table sx={{ minWidth: 150 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell style={{width:"20%"}}>College</TableCell>
                          <TableCell style={{width:"10%"}}>E-mail</TableCell>
                          <TableCell>Date Joined</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {paginatedCollegeList.map((i, index) => (
                          <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{i.first_name}</TableCell>
                            <TableCell>{i.email}</TableCell>
                            <TableCell>{i.date_joined.slice(0, 10)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer> */}
                  {/* <Stack spacing={2} className='mt-3'>
                    <Pagination 
                      count={Math.ceil(collegeList.length / itemsPerPage)} 
                      page={collegePage}
                      onChange={handleCollegePageChange} 
                      color="primary" 
                    />
                  </Stack>
                </div>
              </div>
            </Col>
            
            <Col md={6}>
              <div className='text-center t' style={{ backgroundColor: "#000000", borderRadius: "15px" }}>
                <div className='m-2 p-2'>
                  <h4 style={{ color: "white" }}>User List</h4> */}
                  {/* <TableContainer component={Paper} className='mt-4'>
                    <Table sx={{ minWidth: 150 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell style={{width:"20%"}}>Name</TableCell>
                          <TableCell align='center'>Email</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {paginatedUserList.map((i, index) => (
                          <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{i.username}</TableCell>
                            <TableCell align='center'>{i.email}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer> */}
                  {/* <Stack spacing={2} className='mt-3'> */}
                    {/* <Pagination 
                      count={Math.ceil(userList.length / itemsPerPage)} 
                      page={userPage} 
                      onChange={handleUserPageChange} 
                      color="primary" 
                    />
                  </Stack> */}
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default AdminHome;

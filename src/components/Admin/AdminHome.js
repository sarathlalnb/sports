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
import { Link } from 'react-router-dom';
import { collegeListApi, userListApi } from '../Services/Allapis';

function AdminHome() {
  const [collegeList, setCollegeList] = useState(null);
  const [userList, setUserList] = useState(null);

  const getCollegeList = async () => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const reqHeader = {
        Authorization: `Token ${token}`,
      };
      const result = await collegeListApi(reqHeader);
      setCollegeList(result.data);
    }
  };

  const getUserList = async () => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const reqHeader = {
        Authorization: `Token ${token}`,
      };
      const result = await userListApi(reqHeader); 
      setUserList(result.data);
    }
  };

  useEffect(() => {
    getUserList();
    getCollegeList();
  }, []);

  if (collegeList === null ) return <></>;
if (userList===null) return <></>
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
                <Link style={{ textDecoration: "none" }} to="/admin-request">
                  <CDBSidebarMenuItem icon='book'>Requests</CDBSidebarMenuItem>
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
              <div className='text-center ' style={{ backgroundColor: "#000000", borderRadius: "10px" }}>
                <div className='m-2 p-2'>
                  <h4 style={{ color: "white" }}>College List</h4>
                  <TableContainer component={Paper} className='mt-4'>
                    <Table sx={{ minWidth: 150 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell style={{width:"20%"}}>College</TableCell>
                          <TableCell style={{width:"10%"}}>E-mail</TableCell>
                          <TableCell  >Date Joined</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {collegeList?.map((i, index) => (
                          <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{i.first_name}</TableCell>
                            <TableCell>{i.email}</TableCell>
                            <TableCell>{i.date_joined.slice(0, 10)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className='text-center' style={{ backgroundColor: "#000000", borderRadius: "15px" }}>
                <div className='m-2 p-2'>
                  <h4 style={{ color: "white" }}>User List</h4>
                  <TableContainer component={Paper} className='mt-4'>
                    <Table sx={{ minWidth: 150 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Email</TableCell>
                          <TableCell>Date Joined</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {userList?.map((i, index) => (
                          <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{i.username}</TableCell>
                            <TableCell>{i.email}</TableCell>
                            <TableCell>{i.date_joined.slice(0, 10)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
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

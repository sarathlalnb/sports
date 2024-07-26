import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from '@mui/material/Button';
import axios from 'axios';
import './RequestAdmin.css'
import { collegesponsorlistApi } from '../../Services/Allapis';
import { Link } from 'react-router-dom';


function RequestCollege() {
    const [request, setRequest] = useState(null);
    const token = localStorage.getItem('token');
    const getRequest = async () => {
      if (localStorage.getItem('token')) {
        const token = localStorage.getItem('token');
        const reqHeader = {
          Authorization: `Token ${token}`,
        };
        const result = await collegesponsorlistApi(reqHeader); 
        setRequest(result.data);
      }
    };
 
    useEffect(() => {
        getRequest();
    
      }, []);

      console.log(request); 

      
      const handleReqApproval = async(id)=>{
        try {
          const response = await axios.post(`http://127.0.0.1:8000/collegeapp/sponsors/${id}/approve_sponsor/`,{},{
            headers:{
              Authorization:`Token ${token}`
            }
          })
          if( response.status>=200 && response.status<=300){
            alert("Req Approved")
            getRequest()
          }
        } catch (error) {
          console.log(error);
        } 
      }

      const handleReqDecline = async(id)=>{
        try {
          const response = await axios.post(`http://127.0.0.1:8000/collegeapp/sponsors/${id}/reject_sponsor/`,{},{
            headers:{
              Authorization:`Token ${token}`
            }
          })
          if( response.status>=200&& response.status<=300){
            alert("Req Declined")
            getRequest()
          }
        } catch (error) {
          console.log(error);
        } 
      }
      
    
      if (request === null) return <></>;
    
      return (
        
        <div className='r1'>
          <Link to="/college-home" style={{ textDecoration: "none", color: "black"}} >
          <i class="fa-solid fa-backward fa-beat mx-2"></i>Back</Link>
          <div className='m-5'>
            <h1 style={{ color: 'Black' }} className='text-center mt-3'>
              Requests
            </h1>
            <Table className='mt-4 text-center' striped bordered hover size='sm'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Student</th>
                  <th>Sponsor Name</th>
                  <th>E-mail</th>
                  {/* <th>Date Joined</th> */}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {request.map((i, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{i.student_name}</td>
                    <td>{i.sponsor_name}</td>
                    <td>{i.sponsor_email}</td>
                    {/* <td>{i.date_joined.slice(0, 10)}</td> */}
                    <td>
                      <Button style={{ backgroundColor: 'green', color: 'white' }}
                      onClick={()=>handleReqApproval(i?.id)}
                      
                      >Approve</Button>  <Button style={{ backgroundColor: 'red', color: 'white' }}
                      onClick={()=>handleReqDecline(i?.id)}
                      
                      >Decline</Button>
                      {/* http://127.0.0.1:8000/adminapp/sponsor/2/approve_sponsor/ */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      );
    }

export default RequestCollege
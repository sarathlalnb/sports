import React, { useEffect, useState } from 'react';
import './RequestAdmin.css';
import Table from 'react-bootstrap/Table';
import Button from '@mui/material/Button';
import { sponsorListApi } from '../Services/Allapis';
import axios from 'axios';

function RequestAdmin() {
  const [request, setRequest] = useState(null);
  const token = localStorage.getItem('token');
  const getRequest = async () => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const reqHeader = {
        Authorization: `Token ${token}`,
      };
      const result = await sponsorListApi(reqHeader);
      setRequest(result.data);
    }
  };



  useEffect(() => {
    getRequest();

  }, []);

  console.log(request);

  const handleReqApproval = async(id)=>{
    try {
      const response = await axios.post(`http://127.0.0.1:8000/adminapp/sponsor/${id}/approve_sponsor/`,{},{
        headers:{
          Authorization:`Token ${token}`
        }
      })
      if( response.status>=200&& response.status<=300){
        alert("Req Approved")
        getRequest()
      }
    } catch (error) {
      console.log(error);
    } 
  }

  if (request === null) return <></>;

  return (
    <div className='r1'>
      <div className='m-5'>
        <h1 style={{ color: 'Black' }} className='text-center mt-3'>
          Requests
        </h1>
        <Table className='mt-4 text-center' striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>#</th>
              <th>Sponsor Name</th>
              <th>E-mail</th>
              <th>Date Joined</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {request.map((i, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{i.username}</td>
                <td>{i.email}</td>
                <td>{i.date_joined.slice(0, 10)}</td>
                <td>
                  <Button style={{ backgroundColor: 'green', color: 'white' }}
                  onClick={()=>handleReqApproval(i?.id)}
                  
                  >Approve</Button> 
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

export default RequestAdmin;

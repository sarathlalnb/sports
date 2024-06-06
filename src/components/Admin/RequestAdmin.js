import React, { useEffect, useState } from 'react'
import './RequestAdmin.css'
import Table from 'react-bootstrap/Table';
import Button from '@mui/material/Button';
import { sponsorListApi } from '../Services/Allapis';
function RequestAdmin() {


  const[request,setRequest]=useState(null)

const getRequest=async()=>{
  if(localStorage.getItem('token')){
    const token =localStorage.getItem('token');
    const reqHeader={
      Authorization:`Token ${token}`,

    }
    const result=await sponsorListApi(reqHeader)
    setRequest(result.data)
  }
}
console.log(token);

useEffect(()=>{
  getRequest()
  console.log(token);
  },[])
  console.log(request);
  
  



if (request === null) return <></>;

  return (
    <div className='r1'>
     

<div className='m-5' ><h1 style={{color:"Black"}} className='text-center mt-3 '>Requests</h1>
      <Table className='mt-4 text-center' striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Sponsor Name</th>
          <th>E-mail</th>
          <th>Date Joined</th>
          <th>Action</th>

        </tr>
      </thead>
      {request?.map((i,index)=>{

     
      <tbody>
        <tr  key={index} >
          <td>{index+1}</td>
          <td>{i.username}</td>
          <td>{i.email}</td>
          <td>{i.date_joined.slice(0, 10)}</td>


          <td>


          <Button  style={{backgroundColor:"green",color:"white"}}>Approve</Button>
          <Button className='mx-2'  style={{backgroundColor:"Red",color:"white"}}>Reject</Button>

          </td>
        </tr>
        
      </tbody> })}
    </Table>
    </div>
     
    </div>
  )
}

export default RequestAdmin

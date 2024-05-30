import React from 'react'
import './RequestAdmin.css'
import Table from 'react-bootstrap/Table';
import Button from '@mui/material/Button';
function RequestAdmin() {
  return (
    <div className='r1'>
     

<div className='m-5' ><h1 style={{color:"Black"}} className='text-center mt-3 '>Requests</h1>
      <Table className='mt-4 text-center' striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Sponsor</th>
          <th>E-mail</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>


          <Button  style={{backgroundColor:"green",color:"white"}}>Approve</Button>
          <Button className='mx-2'  style={{backgroundColor:"Red",color:"white"}}>Reject</Button>

          </td>
        </tr>
        
      </tbody>
    </Table>
    </div>
     
    </div>
  )
}

export default RequestAdmin

import React from 'react'
import './RequestAdmin.css'
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';

function RequestAdmin() {
  return (
    <div className='r1'>
     

<div ><h1 className='text-center mt-3 '>Requests</h1></div>
      <Table className='' striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>

     
    </div>
  )
}

export default RequestAdmin

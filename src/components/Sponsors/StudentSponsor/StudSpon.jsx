import React from 'react'
import Table from 'react-bootstrap/Table';
import './StudSpon.css'
function StudSpon() {
  return (
    
    <div className='text-center' id='mev'>
      <div className='col-3'></div>
      <div className='text-center' id='inner'>
        <h4>Sponsered Student List</h4>
        <div id='outerrr' className='m-2'>
          <Table className='text-center'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Student Name</th>
                <th>Email</th>
                <th>Username</th>
               
              </tr>
            </thead>
            <tbody>
              {/* {Studentlist.map((student, index) => (
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.first_name}</td>
                  <td>{student.email}</td>
                  <td>{student.username}</td>
                 
                </tr>
              ))} */}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default StudSpon
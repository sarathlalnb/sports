import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import './studentlist.css';
import { studentlistApi } from '../../Services/Allapis';
import { Link } from 'react-router-dom';


function Studentlist() {
  const [Studentlist, setStudentlist] = useState([]);
  
  const getStudentlist = async () => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const reqHeader = {
        Authorization: `Token ${token}`,
      };
      const result = await studentlistApi(reqHeader); 
     
      setStudentlist(result.data);
     
    }
  };

  useEffect(() => {
    getStudentlist();
  }, []);

  return (
    <div className='text-center' id='maindiv'>
      <Link to="/athletes-home" style={{ textDecoration: "none", color: "white", marginLeft:"-1200px"}} >
      <i class="fa-solid fa-backward fa-beat mx-2"></i>Back</Link>
      <div className='col-3'></div>
      <div className='text-center' id='innerdiv'>
        <h4>Student List</h4>
        <div id='outerdiv' className='m-2'>
          <Table className='text-center'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Student Name</th>
                <th>Email</th>
                <th>Username</th>
                <th>Events Registered</th>
               
              </tr>
            </thead>
            <tbody>
              {Studentlist.map((student, index) => (
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.first_name}</td>
                  <td>{student.email}</td>
                  <td>{student.username}</td>
                  {/* <td>{student.events}</td> */}
                 
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Studentlist;

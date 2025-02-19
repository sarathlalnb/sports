import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import './studentlist.css';
import { Pstudents } from '../../Services/Allapis';
import { Link } from 'react-router-dom';


function Studentlist() {
  const [Studentlist, setStudentlist] = useState([]);
  
  const getStudentlist = async () => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const reqHeader = {
        Authorization: `Token ${token}`,
      };
      const result = await Pstudents(reqHeader); 
     console.log(result);
      setStudentlist(result.data);
     
    }
  };

  useEffect(() => {
    getStudentlist();
  }, []);

  return (
    <div className='text-center' id='maindiv'>
      <Link to="/college-home" style={{ textDecoration: "none", color: "white", marginLeft:"-1200px"}} >
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
                <th>Event Name</th>
               
              </tr>
            </thead>
            <tbody>
              {Studentlist.map((student, index) => (
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.student_name}</td>
                  <td>{student.event_name}</td>
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

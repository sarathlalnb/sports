import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import './StudSpon.css'
import { getSponseredStudentListApi } from '../../Services/Allapis';

function StudSpon() {
  const [Studentlist, setStudentlist] = useState([]);
  
  const getsponseredStudentlist = async () => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const reqHeader = {
        Authorization: `Token ${token}`,
      };
      const result = await getSponseredStudentListApi(reqHeader); 
     console.log(result);
      setStudentlist(result.data);
     
    }
  };

  useEffect(() => {
    getsponseredStudentlist();
  }, []);


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
                <th>Student</th>
                <th>Amount</th>
                <th>Notes</th>
             
               
              </tr>
            </thead>
            <tbody>
              {Studentlist.map((student, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{student.student}</td>
                  <td>{student.payment}</td>
                  <td>{student.note}</td>
                  
                 
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default StudSpon
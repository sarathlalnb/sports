import React, { useEffect, useState } from 'react'
import { getAllwinnersApi } from '../Services/Allapis';
import Table from 'react-bootstrap/Table';
import './Winner.css';
function Winner() {
    const [Winnerlist, setWinnerlist] = useState([]);
  
    const getWinnerlist = async () => {
      if (localStorage.getItem('token')) {
        const token = localStorage.getItem('token');
        const reqHeader = {
          Authorization: `Token ${token}`,
        };
        const result = await getAllwinnersApi(reqHeader);
        console.log(result); 
        setWinnerlist(result.data);
       console.log(Winnerlist);
      }
    };
  
    useEffect(() => {
      getWinnerlist();
    }, []);
  
  return (
    <div className='text-center' id='maindiv'>
    <div className='col-3'></div>
    <div className='text-center' id='innerdiv'>
      <h4>Winners List</h4>
      <div id='outerdiv' className='m-2'>
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
            {Winnerlist.map((student, index) => (
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.first_name}</td>
                <td>{student.email}</td>
                <td>{student.username}</td>
               
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  </div>
  )
}

export default Winner
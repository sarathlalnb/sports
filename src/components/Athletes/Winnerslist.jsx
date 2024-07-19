import React, { useEffect, useState } from 'react'
import "./Winnerslist.css"
import Table from 'react-bootstrap/Table';
import { winnerslistApi } from '../Services/Allapis';

function Winnerslist() {


    const [athletesEvents, setAthletesEvents] = useState([]);
    useEffect(() => {
       getWinnerslist()
      }, []);

      const getWinnerslist = async () => {
        if (localStorage.getItem('token')) {
          const token = localStorage.getItem('token');
          const reqHeader = { Authorization: `Token ${token}` };
          const result = await winnerslistApi(reqHeader);
          console.log(result.data);
          setAthletesEvents(result.data);
        }
      };
  return (
    <div className='text-center' id='maindiv2'>

<div className='col-3'></div>

<div className='text-center '  id='innerdiv' >
    <h4>My Wins</h4>



    <div id='outerdiv' className='m-2'>
    <Table className='text-center ' >

<thead>
 <tr >
    <th>Sl no.</th>
   <th>Event Name</th>
   <th>Event Id</th>
   <th>Position</th>
   
   
 </tr>
</thead>
<tbody>
{athletesEvents.map((student, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{student.event_name}</td>
                  <td>{student.event}</td>
                  <td>{student.position}</td>
                
                  
                 
                </tr>
              ))}
</tbody>
</Table>

    </div>

</div>



</div>
  )
}

export default Winnerslist
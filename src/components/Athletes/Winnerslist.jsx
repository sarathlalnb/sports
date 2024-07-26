import React, { useEffect, useState } from 'react'
import "./Winnerslist.css"
import Table from 'react-bootstrap/Table';

import { Link } from "react-router-dom";
import { winnersdistrictlistApi, winnerstatelistApi } from '../Services/Allapis';

function Winnerslist() {


    const [athletesEvents, setAthletesEvents] = useState([]);
    const [athletesstateEvents, setathletesstateEvents] = useState([]);
    
    useEffect(() => {
       getWinnerslist()
      }, []);

      const getWinnerslist = async () => {
        if (localStorage.getItem('token')) {
          const token = localStorage.getItem('token');
          const reqHeader = { Authorization: `Token ${token}` };
          const result = await winnersdistrictlistApi(reqHeader);
          console.log(result.data);
          setAthletesEvents(result.data);
        }
      };
      const getstateWinnerslist = async () => {
        if (localStorage.getItem('token')) {
          const token = localStorage.getItem('token');
          const reqHeader = { Authorization: `Token ${token}` };
          const result = await winnerstatelistApi(reqHeader);
          console.log(result.data);
          setathletesstateEvents(result.data);
        }
      };


      useEffect(() => {
        getWinnerslist(),
        getstateWinnerslist()
       }, []);



  return (
    <div className='text-center' id='maindiv2'>
<Link to="/athletes-home" style={{ textDecoration: "none", color: "white",marginLeft:"-1200px" }} >
<i class="fa-solid fa-backward fa-beat mx-2"></i>Back</Link>
<div className='col-3'></div>

<div className='text-center '  id='innerdiv' >
  <div>
  
  </div>
  <div>
    <h4>My Wins (State Level)</h4>
 
</div>

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
{athletesstateEvents.map((statestud, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{statestud.event_name}</td>
                  <td>{statestud.event}</td>
                  <td>{statestud.position}</td>
                
                  
                 
                </tr>
              ))}
</tbody>
</Table>

    </div>

</div>







<div className='col-3'></div>

<div className='text-center '  id='innerdiv' >
  <div>
  
  </div>
  <div>
    <h4>My Wins (District Level)</h4>
 
</div>

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
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import './SponsorView.css';

import { Link } from 'react-router-dom';
import { clgsponsorListApi } from '../../Services/Allapis';


function Sponsorview() {

  const [request, setRequest] = useState([]);
    const token = localStorage.getItem('token');
    const getRequest = async () => {
      if (localStorage.getItem('token')) {
        const token = localStorage.getItem('token');
        const reqHeader = {
          Authorization: `Token ${token}`,
        };
        const result = await clgsponsorListApi(reqHeader);
        console.log(result);
        setRequest(result.data);
      }
    };

    useEffect(() => {
        getRequest();
    
      }, []);

      console.log(request); 

  return (
    <div className='text-center' id='main'>
<Link to="/college-home" style={{ textDecoration: "none", color: "white", marginLeft:"-1200px"}} >
<i class="fa-solid fa-backward fa-beat mx-2"></i>Back</Link>
<div className='col-3'></div>

<div className='text-center '  id='innerdiv' >
    <h4>Sponsor List</h4>
    



    <div id='outerdiv' className='m-2'>
    <Table className='text-center ' >

<thead>
 <tr >
   <th>Id</th>
   <th>Name</th>
   <th>Email</th>
   <th>Student name</th>
   <th>Date-Joined</th>

 
   
 </tr>
</thead>
<tbody>
{request.map((Sponsor, index) => (
                <tr key={index}>
                  <td>{Sponsor.id}</td>
                  <td>{Sponsor.student_name}</td>
                  <td>{Sponsor.sponsor_email}</td>
                  <td>{Sponsor.student_name}</td>
                  <td>{Sponsor.date_joined}</td>
                 
                </tr>
              ))}
 
</tbody>
</Table>

    </div>

</div>



</div>
  )
}

export default Sponsorview
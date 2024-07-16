import React, { useEffect, useState } from 'react'
import { mySponsorApi } from '../Services/Allapis';
import Table from 'react-bootstrap/Table';
import './Mysponsor.css'

function Mysponsor() {

    const [request, setRequest] = useState([]);
    
    useEffect(() => {
        getMysponsorlist();
      }, []);

      const getMysponsorlist = async () => {
        if (localStorage.getItem('token')) {
          const token = localStorage.getItem('token');
          const reqHeader = { Authorization: `Token ${token}` };
          const result = await mySponsorApi(reqHeader);
          console.log(result.data);
          setRequest(result.data);
        }
      };
  return (
    <div className='text-center' id='main'>

<div className='col-3'></div>

<div className='text-center '  id='innerdiv' >
    <h4>Sponsor List</h4>



    <div id='outerdiv' className='m-2'>
    <Table className='text-center ' >

<thead>
 <tr >
   <th>Id</th>
  
   <th>Email</th>
   <th>Username</th>
   <th>Date-Joined</th>

 
   
 </tr>
</thead>
<tbody>
{request.map((Sponsor, index) => (
                <tr key={index}>
                  <td>{Sponsor.id}</td>
                  
                  <td>{Sponsor.email}</td>
                  <td>{Sponsor.username}</td>
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

export default Mysponsor
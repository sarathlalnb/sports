import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import './SponsorView.css';
import { sponsorListApi } from '../../Services/Allapis';


function Sponsorview() {

  const [request, setRequest] = useState([]);
    const token = localStorage.getItem('token');
    const getRequest = async () => {
      if (localStorage.getItem('token')) {
        const token = localStorage.getItem('token');
        const reqHeader = {
          Authorization: `Token ${token}`,
        };
        const result = await sponsorListApi(reqHeader);
        setRequest(result.data);
      }
    };

    useEffect(() => {
        getRequest();
    
      }, []);

      console.log(request); 

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

export default Sponsorview
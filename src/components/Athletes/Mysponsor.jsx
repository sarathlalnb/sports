import React, { useEffect, useState } from 'react'
import { mySponsorApi } from '../Services/Allapis';
import Table from 'react-bootstrap/Table';
import './Mysponsor.css'
import { Link } from "react-router-dom";

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
     <Link to="/athletes-home" style={{ textDecoration: "none", color: "white" ,marginLeft:"-1200px" }} >
     <i class="fa-solid fa-backward fa-beat mx-2"></i>Back</Link>

<div className='col-3'>


</div>

<div className='text-center '  id='innerdiv' >

  <div>
    <h4>Sponsor List</h4>
    

        </div>

    <div id='outerdiv' className='m-2'>
    <Table className='text-center ' >

<thead>
 <tr >
   <th>Id</th>
  
   <th>Sponsor Name</th>
   <th>Note</th>
   <th>Amount</th>

 
   
 </tr>
</thead>
<tbody>
{request.map((Sponsor, index) => (
                <tr key={index}>
                  <td>{Sponsor.id}</td>
                  <td>{Sponsor.sponsor}</td>
                  <td>{Sponsor.note}</td>
                  <td>{Sponsor.payment}</td>
                 
                 
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
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
    <h4>Winners List</h4>



    <div id='outerdiv' className='m-2'>
    <Table className='text-center ' >

<thead>
 <tr >
   <th>Id</th>
   <th>Student Name</th>
   <th>College</th>
   <th>Username</th>
   <th>Scolarship</th>
   
 </tr>
</thead>
<tbody>
 <tr>
   <td>1</td>
   <td>Mark</td>
   <td>Otto</td>
   <td>@mdo</td>
   <td>@mdo</td>
 </tr>
 <tr>
   <td>2</td>
   <td>Jacob</td>
   <td>Thornton</td>
   <td>@fat</td>
   <td>@mdo</td>
 </tr>
 <tr>
   <td>3</td>
   <td >Larry the Bird</td> 
   <td>@twitter</td>
   <td>@mdo</td>
   <td>hjsbgjah</td>
   
 </tr>
</tbody>
</Table>

    </div>

</div>



</div>
  )
}

export default Winnerslist
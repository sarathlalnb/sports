import React from 'react'
import Table from 'react-bootstrap/Table';
import'./studentlist.css'
function Studentlist() {
  return (

<div className='text-center' id='maindiv'>

<div className='col-3'></div>

<div className='text-center '  id='innerdiv' >
    <h4>Student List</h4>



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
   <td colSpan={2}>Larry the Bird</td>
   <td>@twitter</td>
   <td>@mdo</td>
   
 </tr>
</tbody>
</Table>

    </div>

</div>



</div>















   
  )
}

export default Studentlist
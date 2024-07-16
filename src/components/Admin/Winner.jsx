// import React, { useEffect, useState } from 'react'
// import { getAllwinnersApi } from '../Services/Allapis';
// import Table from 'react-bootstrap/Table';
// import './Winner.css';
// function Winner() {
//     const [Winnerlist, setWinnerlist] = useState([]);
  
//     const getWinnerlist = async () => {
//       if (localStorage.getItem('token')) {
//         const token = localStorage.getItem('token');
//         const reqHeader = {
//           Authorization: `Token ${token}`,
//         };
//         const result = await getAllwinnersApi(reqHeader);
//         console.log(result); 
//         setWinnerlist(result.data);
//        console.log(Winnerlist);
//       }
//     };
  
//     useEffect(() => {
//       getWinnerlist();
//     }, []);
  
//   return (
//     <div className='text-center' id='maindiv'>
//     <div className='col-3'></div>
//     <div className='text-center' id='innerdiv'>
//       <h4>Winners List</h4>
//       <div id='outerdiv' className='m-2'>
//         <Table className='text-center'>
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Student Name</th>
//               <th>Email</th>
//               <th>Username</th>
             
//             </tr>
//           </thead>
//           <tbody>
//             {Winnerlist.map((student, index) => (
//               <tr key={index}>
//                 <td>{student.id}</td>
//                 <td>{student.first_name}</td>
//                 <td>{student.email}</td>
//                 <td>{student.username}</td>
               
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Winner



import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './Winner.css';


function Winner() {

  const [id,setId] =useState('');
  const [name,setName] =useState('');
  const [college,setCollege] =useState('');
  const [username,setUsername] =useState('');
  const [scholarship,setScholarship] =useState('');
  return (
    <div  className='text-center' id='maindiv'>
      <div className='card shadow m-5 p-5'>
      <h2 className='text-center m-4 text-dark' >Winners List</h2>

<FloatingLabel controlId="floatingInput" label="Id" className="mb-3">

  <Form.Control type="text" placeholder="78909-78987"  />
</FloatingLabel>

<FloatingLabel controlId="name" label="Name"  className="mb-3">
  <Form.Control type="text" placeholder="Name of Employee"   />
</FloatingLabel>

<FloatingLabel controlId="floatingInput" label="College" className="mb-3">
  <Form.Control type="text" placeholder="College"  />
</FloatingLabel>

<FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
  <Form.Control type="text" placeholder="username"  />
</FloatingLabel>

<FloatingLabel controlId="floatingInput" label="Scholarship" className="mb-3">
  <Form.Control type="text" placeholder="scholarship"  />
</FloatingLabel>

<div className='text-center'>
<button className='btn btn-primary px-1 py-1'>Add</button>
</div>
      </div>
    </div>
  )
}

export default Winner
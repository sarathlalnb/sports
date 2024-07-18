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
import { addWinnerApi } from '../Services/Allapis';



function Winner() {

  const [addWinner, setAddWinner] = useState({
    first_name: "",
    username: "",
    email: "",
    password: "",
    gender:"",
    age:""
  })



  const handleAdd = async (e) => {
    e.preventDefault()
    const {  first_name, username, email, password,gender,age} = addWinner
    if (!first_name || !username || !email || !password || !gender || !age) {
      alert("please fill properly")
    } 
    const pId = localStorage.getItem("uId");
    const payload = {
      first_name: addWinner.first_name,
      username: addWinner.username,
      email: addWinner.email,
      password: addWinner.password,
      gender: addWinner.gender,
      age: addWinner.age,
      college_id: pId 
    }
    try {
      const result = await addWinnerApi(payload);
      console.log("API response:", result);
      if (result.status >= 200 && result.status <= 300) {
        alert("Registration success");
        setUserdata({
          first_name: "",
          username: "",
          email: "",
          password: "",
          gender:"",
          age:""
        });

    }else{
      console.log("API error:", result.data);
      alert(result.data);


     
    }
  } catch (error) {
    console.log("API call failed:", error);
    alert("Winner Adding failed. Please try again.");
  }

  }








  return (
    <div  className='text-center' id='maindiv'>
      <div className='card shadow m-5 p-5'>
      <h2 className='text-center m-4 text-dark' >Winners List</h2>

<FloatingLabel controlId="floatingInput" label="Iirst_name" className="mb-3">

  <Form.Control type="text"  value={addWinner.first_name}
                  onChange={(e) => setAddWinner({ ...addWinner, first_name: e.target.value })}
                  required  placeholder="78909-78987"  />
</FloatingLabel>

<FloatingLabel controlId="name" label="Username"  className="mb-3">
  <Form.Control type="text"   placeholder="Username"
                  value={addWinner.username}
                  onChange={(e) => setAddWinner({ ...addWinner, username: e.target.value })}
                  required   />
</FloatingLabel>



<FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
  <Form.Control  type="email"
                  placeholder="Email"
                  value={addWinner.email}
                  onChange={(e) => setAddWinner({ ...addWinner, email: e.target.value })}
                  required />
</FloatingLabel>

<FloatingLabel controlId="floatingInput" label="gender" className="mb-3">
  <Form.Control  value={addWinner.gender}
    onChange={(e) => setAddWinner({ ...addWinner, gender: e.target.value })}
    required />
</FloatingLabel>

<FloatingLabel controlId="floatingInput" label="age" className="mb-3">
  <Form.Control      type="age"
                  placeholder="age"
                  value={addWinner.age}
                  onChange={(e) => setAddWinner({ ...addWinner, age: e.target.value })}
                  required />
</FloatingLabel>

<div className='text-center'>
<button  onClick={(e) => handleAdd(e)} className='btn btn-primary px-1 py-1'>Add</button>
</div>
      </div>
    </div>
  )
}

export default Winner
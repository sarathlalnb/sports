import React from 'react'

function Studwinner() {
    const [addWinner, setAddWinner] = useState({
        event: "", 
        position: "",
        student: "",
      });
    
      const handleAdd = async (e) => {
        e.preventDefault();
        const { student, event, position } = addWinner;
        if (!student || !event || !position) {
          alert("Please fill in all fields properly");
          return;
        }
        const payload = {
          event,
          position,
          student,
        };
        try {
          const token = localStorage.getItem('token');
          const reqHeader = { Authorization: `Token ${token}` };
          const result = await addWinnerApi(payload, reqHeader);
          console.log("API response:", result);
          if (result.status >= 200 && result.status < 300) {
            alert("Registration success");
            setAddWinner({
              student: "",
              event: "",
              position: "",
            });
          } else {
            console.log("API error:", result.data);
            alert(result.data);
          }
        } catch (error) {
          console.log("API call failed:", error);
          alert("Winner Adding failed. Please try again.");
        }
      };
    
  return (
    <div className='text-center' id='maindiv'>
    <Link to="/admin-home" style={{ textDecoration: "none", color: "black",marginLeft:"-1400px", marginTop:"200px"}} >
    <i class="fa-solid fa-backward fa-beat "></i>Back</Link>
   <div className='card shadow m-5 p-5'>
     <div>
     <h2 className='text-center m-4 text-dark'>Add Winner</h2>
    
     </div>
     <FloatingLabel controlId="floatingInputStudent" label="Student ID" className="mb-3">
       <Form.Control
         type="text"
         value={addWinner.student}
         onChange={(e) => setAddWinner({ ...addWinner, student: e.target.value })}
         required
         placeholder="Student ID"
       />
     </FloatingLabel>
     <FloatingLabel controlId="floatingInputEvent" label="Event ID" className="mb-3">
       <Form.Control
         type="text"
         value={addWinner.event}
         onChange={(e) => setAddWinner({ ...addWinner, event: e.target.value })}
         required
         placeholder="Event ID"
       />
     </FloatingLabel>
     <FloatingLabel controlId="floatingInputPosition" label="Position" className="mb-3">
       <Form.Control
         type="number"
         min="1"
         max="3"
         value={addWinner.position}
         onChange={(e) => setAddWinner({ ...addWinner, position: e.target.value })}
         required
         placeholder="Position"
       />
     </FloatingLabel>
     <div className='text-center'>
       <button onClick={(e) => handleAdd(e)} className='btn btn-primary px-1 py-1'>
         Add
       </button>
     </div>
   </div>
 </div>
);
}
  
export default Studwinner
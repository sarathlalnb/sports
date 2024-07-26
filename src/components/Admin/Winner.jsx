import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './Winner.css';
import { addWinnerApi } from '../Services/Allapis';

function Winner() {
  const [addWinner, setAddWinner] = useState({
    event: "", 
    position: "",
    student: "",
    level:""
  });

  const handleAdd = async (e) => {
    e.preventDefault();
    const { student, event, position ,level } = addWinner;
    if (!student || !event || !position|| !level) {
      alert("Please fill in all fields properly");
      return;
    }
    const payload = {
      event,
      position,
      student,
      level
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
      <div className='card shadow m-5 p-5'>
        <h2 className='text-center m-4 text-dark'>Add Winner</h2>
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
        <FloatingLabel controlId="floatingInputPosition" label="District/State level" className="mb-3">
          <Form.Control
            type="text"
            value={addWinner.level}
            onChange={(e) => setAddWinner({ ...addWinner, level: e.target.value })}
            required
            placeholder="level"
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

export default Winner;

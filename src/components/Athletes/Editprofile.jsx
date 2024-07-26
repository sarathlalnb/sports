import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateprofileResponseContext } from '../../ContextAPI/ContextShare';
import { updateAUserprofileAPI } from '../Services/Allapis';

function Editprofile({ profile }) {
  console.log(profile);

  const [show, setShow] = useState(false);

  const { updateprofileResponse, setUpdateprofileResponse } = useContext(updateprofileResponseContext);

  const [profileData, setProfileData] = useState({
    username: profile.user,
    age: profile.age,
    phno: profile.ph_no,
    adno: profile.adm_no
  });

  console.log(profileData);

  const handleClose = () => {
    setShow(false);
    setProfileData({
      username: profile.user,
      age: profile.age,
      phno: profile.ph_no,
      adno: profile.adm_no
    });
  };

  const handleShow = () => setShow(true);

  const updateProfile = async () => {
    const { username, adno, age, phno } = profileData;

    const reqBody = new FormData();
    reqBody.append('username', username);
    reqBody.append('adno', adno);
    reqBody.append('age', age);
    reqBody.append('phno', phno);

    const token = localStorage.getItem('token');
    console.log(token);

    if (!token) {
      alert('Token not found. Please log in again.');
      return;
    }

    const reqHeader = {
      Authorization: `Token ${token}`
    };

    console.log('Token:', token);
    console.log('Request Headers:', reqHeader);

    try {
      const result = await updateAUserprofileAPI(reqBody, reqHeader);
      console.log(result);
      if (result.status === 200) {
        alert('Profile updated');
        setUpdateprofileResponse(result.data);
        handleClose();
      } else {
        alert('Profile not updated');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Profile not updated. Error: ' + error.message);
    }
  };

  return (
    <>
      <i onClick={handleShow} className="fa-solid fa-pen-to-square text-success"></i>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-10 text-center mx-5 p-4">
              <input
                onChange={(e) => setProfileData({ ...profileData, username: e.target.value })}
                type="text"
                value={profileData.username}
                placeholder="Username"
                className="form-control mb-3"
              />
              <input
                onChange={(e) => setProfileData({ ...profileData, adno: e.target.value })}
                type="text"
                value={profileData.adno}
                placeholder="Admission Number"
                className="form-control mb-3"
              />
              <input
                onChange={(e) => setProfileData({ ...profileData, age: e.target.value })}
                type="text"
                value={profileData.age}
                placeholder="Age"
                className="form-control mb-3"
              />
              <input
                onChange={(e) => setProfileData({ ...profileData, phno: e.target.value })}
                type="text"
                value={profileData.phno}
                placeholder="Phone Number"
                className="form-control mb-3"
              />
                <input
                onChange={(e) => setProfileData({ ...profileData, accno: e.target.value })}
                type="text"
                value={profileData.accno}
                placeholder="Account Number"
                className="form-control mb-3"
              />
                <input
                onChange={(e) => setProfileData({ ...profileData, bankname: e.target.value })}
                type="text"
                value={profileData.phno}
                placeholder="Bank Name"
                className="form-control mb-3"
                />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button className="btn btn-danger" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={updateProfile} variant="primary">
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Editprofile;

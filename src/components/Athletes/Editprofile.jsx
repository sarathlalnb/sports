import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateprofileResponseContext } from '../../ContextAPI/ContextShare';
import { updateAUserprofileAPI } from '../Services/Allapis';

function Editprofile({ profile }) {
  const [show, setShow] = useState(false);

  const { updateprofileResponse, setUpdateprofileResponse } = useContext(updateprofileResponseContext);

  const initialProfileData = {
   
  };

  const [profileData, setProfileData] = useState(initialProfileData);

  const handleClose = () => {
    setShow(false);
    setProfileData(initialProfileData);
  };

  const handleShow = () => setShow(true);

  const updateProfile = async () => {
    const changedData = {};
    Object.keys(profileData).forEach(key => {
      if (profileData[key] !== profile[key]) {
        changedData[key] = profileData[key];
      }
    });

    if (Object.keys(changedData).length === 0) {
      alert('No changes made.');
      return;
    }

    const reqBody = new FormData();
    for (const key in changedData) {
      reqBody.append(key, changedData[key]);
    }

    const token = localStorage.getItem('token');
    if (!token) {
      alert('Token not found. Please log in again.');
      return;
    }

    const reqHeader = {
      Authorization: `Token ${token}`
    };

    try {
      const result = await updateAUserprofileAPI(reqBody, reqHeader);
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
                onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                type="text"
                value={profileData.name}
                placeholder="Name"
                className="form-control mb-3"
              />
              <input
                onChange={(e) => setProfileData({ ...profileData, adm_no: e.target.value })}
                type="text"
                value={profileData.adm_no}
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
                onChange={(e) => setProfileData({ ...profileData, ph_no: e.target.value })}
                type="text"
                value={profileData.ph_no}
                placeholder="Phone Number"
                className="form-control mb-3"
              />
              <input
                onChange={(e) => setProfileData({ ...profileData, photo: e.target.value })}
                type="text"
                value={profileData.photo}
                placeholder="Photo URL"
                className="form-control mb-3"
              />
              <input
                onChange={(e) => setProfileData({ ...profileData, dob: e.target.value })}
                type="text"
                value={profileData.dob}
                placeholder="Date of Birth"
                className="form-control mb-3"
              />
              <input
                onChange={(e) => setProfileData({ ...profileData, bankname: e.target.value })}
                type="text"
                value={profileData.bankname}
                placeholder="Bank Name"
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
                onChange={(e) => setProfileData({ ...profileData, ifsc_code: e.target.value })}
                type="text"
<<<<<<< HEAD
                value={profileData.ifsc_code}
                placeholder="IFSC Code"
=======
                value={profileData.bankname}
                placeholder="Bank Name"
>>>>>>> b092736fbf22355dd6f74a733c330e6ada5630b3
                className="form-control mb-3"
              />
              <input
                onChange={(e) => setProfileData({ ...profileData, achivements: e.target.value })}
                type="text"
                value={profileData.achivements}
                placeholder="Achievements"
                className="form-control mb-3"
              />
              <input
                onChange={(e) => setProfileData({ ...profileData, interest: e.target.value })}
                type="text"
                value={profileData.interest}
                placeholder="Interest"
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

import React, { useContext, useEffect, useState } from 'react'
import Aside from "../Common Components/Aside/Aside";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
  import { Col, Row } from "react-bootstrap";
import { profileApi } from '../Services/Allapis';
import Editprofile from './Editprofile';
import { addprofileResponseContext, updateprofileResponseContext } from '../../ContextAPI/ContextShare';

function UserProfile() {
    const fetchAsideItems = () => {

        const asideObj = [
          { text: "All Events", link: "/athletes-home", icon: "th-large" },
          {
            text: "Sponsors",
            link: "",
            icon: "sticky-note",
          },
         
        ];
    
        return <Aside asideObj={asideObj} />;
      };

      //const {addprofileResponse,setAddprofileResponse}=useContext(addprofileResponseContext)
      const {UpdateProfileResponse,setUpdateProfileResponse}=useContext(updateprofileResponseContext)

     const [athletesprofile,setAthletesprofile] = useState([])


     const [show, setShow] = useState(false);

     

      const getProfile = async () => {
        if (localStorage.getItem('token')) {
          const token = localStorage.getItem('token');
          const reqHeader = { Authorization: `Token ${token}` };
          const result = await profileApi(reqHeader);
          console.log(result);
          setAthletesprofile(result.data);
          console.log(athletesprofile);
          
        }
      };

      useEffect(() => {
        getProfile();
      }, [UpdateProfileResponse]);





     
    








  return (
    <div className="main-grid">
       <div>{fetchAsideItems()}</div>
<div className='m-5 p-5 '   >

<Row>
<Col>
<div className='text-center'>
<img style={{borderRadius:"50%",width:"100px,",height:"100px"}} src="https://i.postimg.cc/9Qb0nHmV/social-media-news-2022-08-17-T091907-918.webp" alt="round" />
<h3 className='mt-3'>Anitha Thomas <Editprofile profile={athletesprofile} /> </h3>
</div>

</Col>
</Row> 
<Row className='m-3 p-3' style={{colour:"black"}}>
   <Col>
   <label htmlFor="">Name</label>
   <FloatingLabel controlId="floatingPassword" label={athletesprofile.user}>
        <Form.Control type="text" placeholder="name" />
      </FloatingLabel>
      <label htmlFor="">Age</label>
      <FloatingLabel  className='mt-3 ' controlId="floatingPassword" label={athletesprofile.age}>
        <Form.Control type="text" placeholder="age" />
      </FloatingLabel>
      <label htmlFor="">DOB</label>
      <FloatingLabel className='mt-3' controlId="floatingPassword" label={athletesprofile.dob}>
        <Form.Control type="text" placeholder="DOB" />
      </FloatingLabel>
 
      <label htmlFor="">AdmissionNo</label>
    <FloatingLabel className='mt-4' controlId="floatingPassword" label={athletesprofile.adm_no}>
        <Form.Control type="text" placeholder="admission no" />
      </FloatingLabel>
   </Col>
   
      

      <Col>
      <label htmlFor="">Phn-No</label>
      <FloatingLabel  controlId="floatingPassword" label={athletesprofile.ph_no}>
        <Form.Control type="text" placeholder="phone no" />
      </FloatingLabel>
      <label htmlFor="">Bank</label>
      <FloatingLabel className='mt-3' controlId="floatingPassword" label={athletesprofile.bankname}>
        <Form.Control type="text" placeholder="Bank" />
      </FloatingLabel>
      <label htmlFor="">Acc-No</label>
      <FloatingLabel className='mt-3' controlId="floatingPassword" label={athletesprofile.accno}>
        <Form.Control type="text" placeholder="acc no" />
      </FloatingLabel>
      <label htmlFor="">IFSC</label>
      <FloatingLabel className='mt-3' controlId="floatingPassword" label={athletesprofile. ifsc_code}>
        <Form.Control type="text" placeholder=" ifsc_code" />
      </FloatingLabel>

      </Col>
    
    
    
      
     
      


   
</Row>
</div>
       
    </div>
  )
}

export default UserProfile

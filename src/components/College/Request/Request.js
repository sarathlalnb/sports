import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import Aside from "../../Common Components/Aside/Aside";
import { getSponsorApi } from "../../Services/Allapis";
import axios from "axios";
import { Link } from "react-router-dom";
  


const Request = () => {
  const fetchAsideItems = () => {
    const asideObj = [
      { text: "Dashboard", link: "/college-home", icon: "th-large" },
      {
        text: "Requests",
        link: "/college/request",
        icon: "sticky-note",
      },
    ];

    return <Aside asideObj={asideObj} />;
  };

  const [sponsor, setSponsor] = useState(null);
  const token = localStorage.getItem('token');

  const getSponsor = async () => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const reqHeader = {
        Authorization: `Token ${token}`,
      };
      const result = await getSponsorApi(reqHeader);
      setSponsor(result.data);
    }
  };
  const handleReqApproval = async(id)=>{
    try {
      const response = await axios.post(``,{},{headers:{Authorization:"Token "+token}})
      if( response.status>=200&& response.status<=300){
        alert("Req Approved")
        getSponsor()
      }
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getSponsor();
  }, []);

  console.log(sponsor);

  if (sponsor === null) return <></>;

  return (
    
    <div className="main-grid">
     
      <div>{fetchAsideItems()}</div>
      

      <Container className="mt-5">
        
        <Link to="/athletes-home" style={{ textDecoration: "none", color: "black"}} >
        <i class="fa-solid fa-backward fa-beat mx-2"></i>Back</Link>
        
        <div className="text-start event-head mb-4 sticky-top">
          <h3 className="mt-1">
            <b>REQUESTS</b>
          </h3>
        </div>

        <Table className="mt-4 text-center" striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Sponsor Name</th>
              <th>Student Name</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {sponsor?.map((i, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{i.sponsor}</td>
                <td>{i.student}</td>
                <td>{i.payment}</td>
                <td>
                  <Button
                    style={{
                      backgroundColor: 'green',
                      color: 'white',
                      width: "50%",
                      height: "50%"
                    }}
                    onClick={()=>handleReqApproval(i.id)}
                  >
                    Approve
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Request;

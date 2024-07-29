import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { ViewwSponslistApi } from "../Services/Allapis";

function Sponsors() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    getSponsorsList();
  }, []);

  const getSponsorsList = async () => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      const reqHeader = { Authorization: `Token ${token}` };
      const result = await ViewwSponslistApi(reqHeader);
      console.log(result.data);
      setSponsors(result.data);
    }
  };

  return (
    <div className="text-center" id="maindiv2">
      <div className="col-3"></div>

      <div className="text-center " id="innerdiv">
        <h4>Sponsors</h4>

        <div id="outerdiv" className="m-2">
          <Table striped bordered hover className="text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Username</th>
                <th>Email</th>
                <th>Date Joined</th>
                <th>Admin Approved</th>
              </tr>
            </thead>
            <tbody>
              {sponsors.map((sponsor, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{sponsor.username}</td>
                  <td>{sponsor.email}</td>
                  <td>{new Date(sponsor.date_joined).toLocaleDateString()}</td>
                  <td>{sponsor.is_adminapproved ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;

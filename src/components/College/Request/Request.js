import React from "react";
import { Container, Stack, Table } from "react-bootstrap";
import Aside from "../../Common Components/Aside/Aside";
import { Avatar } from "@mui/material";


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
  return (
    <div className="main-grid">
      <div>{fetchAsideItems()}</div>
      <Container className="mt-5">
        <div className="text-start event-head mb-4 sticky-top">
          <h3 className="mt-1">
            <b>REQUESTS</b>
          </h3>
        </div>

        <Table className="mt-4 text-center" striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody className="text-center" >
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td >
                {" "}
                <Stack  style={{alignItems:'center'}}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                 
                </Stack>
              </td>
             
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Request;

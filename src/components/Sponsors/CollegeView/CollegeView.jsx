import React from "react";
import Aside from "../../Common Components/Aside/Aside";
import { Table } from "react-bootstrap";

export const CollegeView = () => {
  const fetchAsideItems = () => {
    const asideObj = [
      { text: "Dashboard", link: "/sponsor/home", icon: "th-large" },
      {
        text: "Available Athletes",
        link: "/sponsor/available-athletes",
        icon: "sticky-note",
      },
      {
        text: "Available College",
        link: "/sponsor/available-college",
        icon: "sticky-note",
      },
    ];

    return <Aside asideObj={asideObj} />;
  };
  return (
    <div className="main-grid">
      <div>{fetchAsideItems()}</div>
      <div className="p-5">
        <div className="text-start event-head mb-4 mt-4">
          <h3>
            <b>Available Colleges</b>
          </h3>
        </div>

        <Table shadow hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{alignItems:'center'}}>1</td>
              <td>
                <img style={{height:'100px' , width:'200px'}} src="https://i.postimg.cc/cJFqc5q2/images-2.jpg" alt="" />
              </td>
              <td>St. ALBERT'S COLLEGE KOCHI</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

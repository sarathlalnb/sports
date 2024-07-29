import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { ViewwNotificationsApi } from '../Services/Allapis';

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getNotificationsList();
  }, []);

  const getNotificationsList = async () => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      const reqHeader = { Authorization: `Token ${token}` };
      const result = await ViewwNotificationsApi(reqHeader);
      console.log(result.data);
      setNotifications(result.data);
    }
  };

  return (
    <div className="text-center">
      <h4>Notifications</h4>
      <div id="outerdiv" className="m-2">
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Message</th>
              <th>Date Created</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{notification.message}</td>
                <td>{new Date(notification.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminNotifications;

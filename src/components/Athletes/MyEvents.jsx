import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { UserEventlistApi } from '../Services/Allapis';
import './MyEvents.css'

function MyEvents() {
  const [Eventlist, setEventlist] = useState([]);

  const getEventlist = async () => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const reqHeader = {
        Authorization: `Token ${token}`,
      };
      try {
        const result = await UserEventlistApi(reqHeader); 
        console.log('Fetched Event List:', result.data);

        // Ensure result is an array
        if (Array.isArray(result.data)) {
          setEventlist(result.data);
        } else {
          console.error('Error: API response is not an array:', result);
        }
      } catch (error) {
        console.error('Error fetching event list:', error);
      }
    }
  };

  useEffect(() => {
    getEventlist();
  }, []);

  return (
    <div className='text-center' id='mp'>
      <div className='col-3'></div>
      <div className='text-center' id='innerdiv'>
        <h4>My Events</h4>
        <div id='outerdiv' className='m-2'>
          <Table className='text-center'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Event Id</th>
                <th>Event Name</th>
              </tr>
            </thead>
            <tbody>
              {Eventlist.map((event, index) => (
                <tr key={index}>
                  <td>{event.id}</td>
                  <td>{event.event}</td> {/* Assuming event_id is the correct property */}
                  <td>{event.event_name}</td> {/* Assuming event_name is the correct property */}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default MyEvents;

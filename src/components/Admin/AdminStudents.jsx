import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { collegeListApi } from '../Services/Allapis';
import { useNavigate } from 'react-router-dom';

function AdminStudents() {

    const navigate = useNavigate()

    const [colleges, setColleges] = useState([]);

    const Studentspage = async (id) => {
        navigate(`/admin-collegestudents/${id}`)
    }

    const getCollegeList = async () => {

        const result = await collegeListApi();
        console.log(result.data);
        setColleges(result.data);
    }

    useEffect(() => {
        getCollegeList()
    }, []);

    return (

        <div>
            <Table className='text-center ' >

                <thead>
                    <tr >
                        <th>Id</th>

                        <th>college Name</th>





                    </tr>
                </thead>
                <tbody>
                    {colleges.map((college, index) => (
                        <tr key={index}>
                            <td>{college.id}</td>
                            <td>{college.first_name}</td>
                            <td><button onClick={()=>{
                                Studentspage(college.id)
                            }} className='btn'>View Students</button></td>


                        </tr>
                    ))}

                </tbody>
            </Table>





        </div>
    )
}


export default AdminStudents
import React from 'react'
import './Aside.css'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';


function Aside({asideObj}) {
    
  return (
    <div  >
     <CDBSidebar className='asideBody'>
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>

            <h6 className='me-3'>
                <b>
                    <span>
                         SPORTS<span className='head2'>MANAGER</span>
                    </span>
                </b>
            </h6>
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
           {asideObj?asideObj.map((i)=>(<Link to={i.link}> <CDBSidebarMenuItem icon={i.icon}>{i.text}</CDBSidebarMenuItem></Link>)):""}
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
        <Link style={{textDecoration:'none',color:'white'}} to={'/'}>  
         {/* /innovator/profile */}
            <div
              className="sidebar-btn-wrapper ms-3"
              style={{padding: '20px 5px'}}
            >
              <Stack direction="row" spacing={2}>
              <Avatar >L</Avatar> <h5 className='mt-2'>Logout</h5>
        </Stack>
            </div>
        </Link>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  )
}

export default Aside
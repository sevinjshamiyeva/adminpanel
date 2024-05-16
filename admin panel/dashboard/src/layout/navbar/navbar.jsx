import React from 'react'
import AddUser from '../../pages/admin/addUser'
import { Link } from 'react-router-dom'
import "./navbar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo,faPalette } from '@fortawesome/free-solid-svg-icons';
import {faBell} from "@fortawesome/free-regular-svg-icons"
import Badge from '@mui/material/Badge';
import Menu2 from '../../components/menu2'
function Navbar() {
  return (
    <>
    <nav >
        <div className="container">
            <div className="profile">
                <div className="circle">
                  <img src="https://ca-times.brightspotcdn.com/dims4/default/2079065/2147483647/strip/true/crop/3836x2600+0+203/resize/1200x813!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fc2%2F21%2F77776cce441982c7a44c91138de9%2F1321170-la-sp-2023-espy-awards-126-ajs.jpg" alt="" />
                </div>
                <span style={{fontSize:"18px"}}>Mike Tyson</span>
                
            </div>
            <div className="icons">
            <FontAwesomeIcon className='icon' icon={faUndo} size='2xl' />
            
            <Badge badgeContent={4} color="primary"><FontAwesomeIcon className='icon' icon={faBell} size='2xl' />
            
            </Badge>
            <Menu2/>
            
            </div>
            

        </div>
    </nav>
    </>
  )
}

export default Navbar
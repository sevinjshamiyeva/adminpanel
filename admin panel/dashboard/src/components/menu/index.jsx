import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AddUser from '../../pages/admin/addUser';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faLayerGroup,faAddressBook,faBox,faChartSimple } from '@fortawesome/free-solid-svg-icons';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250,boxShadow:"rgba(0, 0, 0, 0.6)" }} role="presentation" onClick={toggleDrawer(false)}>
      <List style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <MenuOpenIcon style={{fontSize:"40px",color:"#1976D2"}}/>
      </List>
      <Divider />
      <List  >
        {[<Link key="dashboard" to="/dashboard" style={{display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",marginTop:"30px"}} ><FontAwesomeIcon  icon={faLayerGroup} size='2xl' /><span style={{fontSize:"18px",marginLeft: "10px"}}>Dashboard</span></Link>, <Link  key="addUser" to="/addUser" style={{display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",marginTop:"30px"}}><FontAwesomeIcon icon={faAddressBook} size='2xl' /><span style={{fontSize:"18px",marginLeft: "10px"}}>Customers</span></Link>, <Link key="customer" to="/product" style={{display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",marginTop:"30px",color:"#551A8B"}}><FontAwesomeIcon icon={faBox} size='2xl' /><span style={{fontSize:"18px",marginLeft: "10px"}}>Products</span></Link>,<Link key="statistics" to="/statistic" style={{display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",marginTop:"30px",color:"#551A8B"}}><FontAwesomeIcon icon={faChartSimple} size='2xl'/><span style={{fontSize:"18px",marginLeft: "10px"}}>Statistics</span></Link>].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
             
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );

  return (
    <div style={{width:"80px",height:"100vh",position:"absolute",top:"0",boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.6)',}}>
      <Button onClick={toggleDrawer(true)} style={{marginTop:"45px"}}><FontAwesomeIcon icon={faBars} size='2xl' /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <ul style={{marginTop:"80px",textAlign:"center"}}>
        <li style={{marginTop:"30px"}}><Link to="/dashboard"><FontAwesomeIcon icon={faLayerGroup} size='2xl'/></Link></li>
        <li style={{marginTop:"30px"}}><Link to='/addUser'><FontAwesomeIcon icon={faAddressBook} size='2xl' /></Link></li>
        <li style={{marginTop:"30px"}}><Link to="/product"><FontAwesomeIcon icon={faBox} size='2xl' /></Link></li>
        <li style={{marginTop:"30px"}}><Link to="/statistic"><FontAwesomeIcon icon={faChartSimple} size='2xl'/></Link></li>
      </ul>
    </div>
  );
}

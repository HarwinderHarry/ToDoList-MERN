import React, {useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'; 
import './Dashboard.css'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Home from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ChecklistIcon from '@mui/icons-material/Checklist';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Swal from 'sweetalert2'
import { Outlet } from "react-router-dom";
import axios from "axios";

const drawerWidth = 280;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

const handleSignout = async () => {
  if(isLoggedIn){
    await axios.post('http://localhost:8080/signout');
    setIsLoggedIn(false);
    console.log("ok");
  }else{
    console.log("cancel");
  }
}

  const navigate = useNavigate();

  const drawer = (
    <div>
      <Toolbar>
        <img src='/images/Mark.png' alt='Logo'/>
       <h4>To-Do App</h4>
      </Toolbar>
      <Divider />  
      <div id='navInnerBtn'>
      <Button className='nav-btn' onClick={()=>handleClickOpen()}>Add Task  <span className='plusIcon'><AddCircleIcon/></span></Button>
        </div>   
      <List className='dashboardList'>
      <ListItem disablePadding onClick={()=> navigate("/dashboard")}>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText>Dashboard </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={()=> navigate("/active")}>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText>Active </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={()=> navigate("/complete")}>
            <ListItemButton>
              <ListItemIcon>
                <ChecklistIcon />
              </ListItemIcon>
              <ListItemText>Complete </ListItemText>
            </ListItemButton>
          </ListItem>

      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  function handleClickOpen()
  {
    
    Swal.fire({
      html:
      '<form id="myForm">' +
      '<input id="input1" class="swal2-input" placeholder="Input field 1">' +
      '<input id="input2" class="swal2-input" placeholder="Input field 2">' +
      '</form>',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      cancelButtonText: 'Cancel',
      preConfirm: () => {
          const input1 = Swal.getPopup().querySelector('#input1').value;
          const input2 = Swal.getPopup().querySelector('#input2').value;
          return [input1, input2];
      }
  }).then((result) => {
      if (result.isConfirmed) {
          const values = result.value;
      console.log(values);
      }
  });
  
    
    

  }
  return (
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <div className='headerAlignCust'>
          <Typography variant="h6" noWrap component="div">
            TO-DO List
          </Typography>
          <Button className='header-btn' onClick={handleSignout}>Sign Out <span className='plusIcon'><ExitToAppIcon /></span></Button>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
 
    
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
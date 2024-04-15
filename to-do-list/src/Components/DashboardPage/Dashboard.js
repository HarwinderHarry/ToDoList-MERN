import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'; 
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
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
// import Swal from 'sweetalert2'
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewTodo } from '../../redux/actions';
const drawerWidth = 280;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [inputText,setInputtext] = useState("");
  const dispatch = useDispatch();

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

  const navigate = useNavigate();



  // PopBox //

  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onInputChange = (e) =>{
      console.log(e);
      setInputtext(e);
  }


  const drawer = (
    <div>
      <Toolbar>
        <img src='/images/Mark.png' alt='Logo'/>
       <h4>To-Do App</h4>
      </Toolbar>
      <Divider />              
        <div id='navInnerBtn'>
      <Button className='nav-btn' onClick={handleClickOpen}>
      Add Task
      <span className='plusIcon'><AddCircleIcon/></span>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const text = formJson.text;
            const body = formJson.message;
            console.log(text , body);
           dispatch(addNewTodo());
            handleClose();
          },
        }}
      >
        <DialogTitle>Add Your Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            name="text"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
          onChange={(e)=>{onInputChange(e.target.value)}}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            name="message"
            label="Body"
            type="textarea"
            multiline
          rows={4}
            fullWidth
            variant="standard"
            onChange={(e)=>{onInputChange(e.target.value)}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
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

  // function handleClickOpen()
  // {
    
  //   Swal.fire({
  //     html:
  //     '<form id="myForm">' +
  //     '<input id="input1" class="swal2-input" placeholder="Input field 1">' +
  //     '<input id="input2" class="swal2-input" placeholder="Input field 2">' +
  //     '</form>',
  //     showCancelButton: true,
  //     confirmButtonText: 'Submit',
  //     cancelButtonText: 'Cancel',
  //     preConfirm: () => {
  //         const input1 = Swal.getPopup().querySelector('#input1').value;
  //         const input2 = Swal.getPopup().querySelector('#input2').value;
  //         return [input1, input2];
  //     }
  // }).then((result) => {
  //     if (result.isConfirmed) {
  //         const values = result.value;
  //     console.log(values);
  //     }
  // });
  // }

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
          <Button className='header-btn' >Sign Out <span className='plusIcon'><ExitToAppIcon /></span></Button>
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
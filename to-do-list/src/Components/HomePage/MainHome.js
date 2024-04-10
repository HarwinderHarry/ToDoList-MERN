import React from 'react';
import './MainHome.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {Box, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';

const MainHome = () => {
  return (
    <div id='MainHome'>
      <div className='mainBox'>
        <div className='textArea'>
          <h1>Hello, Friedns!</h1>
          <h5>What do you want to do today?</h5>
        </div>
        <div className='vectorArea'>
          <img src='/images/laptopVector.png' alt='' />
        </div>
      </div>

      <Box sx={{ flexGrow: 1 }} className="listArea">
      <Grid container spacing={2}>
        <Grid item xs={9}>
        <div className='topHeadings'>
          <h2>Today's Task</h2>
          <h4>Delete All</h4>
        </div>
        <div className='ourLists'>
           <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
     <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <CheckCircleOutlineIcon />
               <div className='listData'>
                hello demo text
               </div>
              </ListItemIcon>
              <ListItemText/>
            </ListItemButton>
          </ListItem>
         </List>
        </div>
        </Grid>
        <Grid item xs={3}>
        <div className='tasksArea'>
         <h3>Friday, 5 May 2024</h3>
         <div className='box1'>
          <div className='icon'><CheckCircleIcon /></div>
          <div className='text1'>40%</div>
          <div className='text2'>Completed tasks</div>
         </div>
         <div className='box2'>
          <div className='icon'><WatchLaterIcon /></div>
          <div className='text1'>40%</div>
          <div className='text2'>Completed tasks</div>
         </div>
        </div>
        </Grid>
      </Grid>
    </Box>
    </div>

  )
}

export default MainHome;

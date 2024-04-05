import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {Box, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';

const Active = () => {
  return (
    <div id='active'>
      <Box sx={{ flexGrow: 1 }} className="activeList">
    <Grid container spacing={2}>
      <Grid item xs={12}>
      <div className='activeHeadings'>
        <h2>Today's Task</h2>
        <h4>Delete All</h4>
      </div>
      <div className='addLists'>
         <List sx={{ width: '100%', maxWidth: 360}}>
   <ListItem disablePadding>
          <ListItemButton >
            <ListItemIcon>
              <CheckCircleOutlineIcon />
             <div className='addedData'>
              hello demo text
             </div>
            </ListItemIcon>
            <ListItemText/>
          </ListItemButton>
        </ListItem>
       </List>
      </div>
      </Grid>
    </Grid>
  </Box></div>
  )
}

export default Active;
import React, { useEffect, useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Box, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { makeStyles , Accordion } from '@material-ui/core/styles';
// import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSelector } from "react-redux";
import './Active.css';



const Active = () => {
  
  const [listData,setListData] = useState([])
  
  let state = useSelector(state => state.todosReducers)

  useEffect(() => {
    console.log(state)
    setListData(state.list)
  })

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
              <List sx={{ width: '100%', maxWidth: 360 }}>
                {

                listData.map((x, id) =>
                    <ListItem key={id}>
                      <ListItemButton >
                        <ListItemIcon>
                          <CheckCircleOutlineIcon />
                          {x.data.inputText}
                        </ListItemIcon>
                        <ListItemText />
                      </ListItemButton>
                    </ListItem>
                  )
                }
              </List>
            </div>
          </Grid>
        </Grid>
      </Box>

    </div>
  )
}

export default Active;
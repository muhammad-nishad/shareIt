import React from 'react'
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import {Box, ListItemButton} from '@mui/material'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

export default function AdminSidebar() {
  return (
    <>
    <Box>
      <Box position='fixed' >
        
    <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon>
            <PeopleOutlineOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon>
            <ReportProblemOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="Reported Posts" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon>
            <ExitToAppOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>

    
      </Box>
    </Box>


    
    
    </>
  )
}

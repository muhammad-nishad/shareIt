import { List, Box, ListItem, ListItemButton, ListItemIcon, ListItemText,Switch } from '@mui/material'
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react'

function Sidebar() {
  return (

    <Box flex={1} p={1} sx={{ display: { xs: 'none', md: 'block' } }} >
      <Box position='fixed'>

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
              <ExploreOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Explore" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon>
              <ChatBubbleOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Chats" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon>
              <NotificationsActiveOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItemButton>
        </ListItem>

        {/* <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon>
              <ModeNightIcon />
            </ListItemIcon>
            <Switch />
          </ListItemButton>
        </ListItem> */}
      </List>
      </Box>
    </Box>

  )
}

export default Sidebar

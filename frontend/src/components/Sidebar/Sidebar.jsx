import { List, Box, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined';
// import HomeIcon from '@mui/icons-material/Home';
// import HomeIcon from '@mui/icons-material/Home';
import HomeIcon from '@mui/icons-material/Home';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Save from '@mui/icons-material/TurnedInNotOutlined';

function Sidebar() {
  const navigate = useNavigate()
  return (

    <Box flex={1} p={1} sx={{ display: { xs: 'none', md: 'block',backgroundColor:"white" } }} >
      <Box position='fixed'>

        <List  >
          <ListItem disablePadding>
            <ListItemButton component='a' onClick={(e) => {
              e.preventDefault()
              navigate("/")
            }}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' onClick={(e) => {
              e.preventDefault()
              navigate("/community")
            }}>
              <ListItemIcon>
                <Diversity2OutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Community" />
            </ListItemButton>
          </ListItem>

          {/* <ListItem disablePadding>
            <ListItemButton component='a' href=''>
              <ListItemIcon>
                <ExploreOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton>
          </ListItem> */}

          <ListItem disablePadding>
            <ListItemButton component='a' href='#' onClick={(e)=>{
              e.preventDefault()
              navigate("/chat")
              
            }} >
              <ListItemIcon>
                <ChatBubbleOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Chats" />
            </ListItemButton >
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' onClick={(e)=>{
              e.preventDefault()
              navigate("/savedPosts")
            }}>
              <ListItemIcon>
                <Save />
              </ListItemIcon>
              <ListItemText primary="Saved Posts" />
            </ListItemButton>
          </ListItem>

          {/* <ListItem disablePadding>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <NotificationsActiveOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItemButton>
          </ListItem> */}
        </List>
      </Box>
    </Box>

  )
}

export default Sidebar

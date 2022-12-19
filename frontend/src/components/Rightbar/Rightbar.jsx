import Box from '@mui/material/Box';
import React, { useState } from 'react'
import { Typography, AvatarGroup, Avatar, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Divider, InputBase } from '@mui/material'
import { useFormik } from 'formik';
import SearchUsersList from '../SearchUserList/SearchUsersList';
import { useEffect } from 'react';
import axios from 'axios';




function Rightbar() {
    const [search,setSearch]=useState()
    const formik=useFormik({
        initialValues:{
            users:'',
        }
    })


    useEffect(async()=>{
        const response= await  axios.get(`${process.env.REACT_APP_BACKEND_URL}/usersearch/${formik.values.users}`)
        console.log(response,'response');
        setSearch(response.data)
    },[formik.values.users])

    return (
        <Box flex={3} p={1} sx={{ display: { xs: "none", lg: "block" } }}>
      <Box position="fixed" width="31%" height="100vh" bgcolor="#EAF6F6">
        {/* <Typography align='center' variant='h5' fontWeight={100} mt={1} mb={2} color='green' > <b>Search People</b> </Typography> */}
        {/* <Divider variant="middle" sx={{ borderBottomWidth: 3 }} /> */}

        <Box
          sx={{
            width: "80%",
            marginTop: "26px",
            marginLeft: "9%",
            height: "30px",
            borderRadius: "15px",
            padding: "0 10px",
            display: "flex",
            justifyContent: "center",
            border: "2px solid",
          }}
        >
          <InputBase
            fullWidth
            variant="standard"
            size="small"
            name="users"
            placeholder="Search People"
            onChange={formik.handleChange}
            value={formik.values.users}
            // onClick={() => setShowSearch(true)}
          />
        </Box>
        <SearchUsersList
        search={search}
        //   searchUser={searchUser}
        //   setSearchUser={setSearchUser}
        />
      </Box>
    </Box>

        // <Box flex={2} p={1} sx={{ display: { xs: 'none', md: 'block' } }}>
        //     <Box position='fixed' width={300}>
        //         <Typography variant='h6' fontWeight={100} mt={2} mb={2} >Online Friends</Typography>
        //         <AvatarGroup max={6}>
        //             <Avatar alt="" src="" />
        //             <Avatar alt="Travis Howard" src="" />
        //             <Avatar alt="Cindy Baker" src="" />
        //             <Avatar alt="Agnes Walker" src="" />
        //             <Avatar alt="Trevor Henderson" src="" />
        //             <Avatar alt="Agnes Walker" src="" />
        //             <Avatar alt="Trevor Henderson" src="" />
        //         </AvatarGroup>
        //         <Typography variant='h6' fontWeight={100}>
        //             Latest Photos
        //         </Typography>
        //         <ImageList cols={3} rowHeight={100} gap={5}>
        //             <ImageListItem >
        //                 <img
        //                     src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
        //                     alt=''
        //                 />
        //             </ImageListItem>
        //             <ImageListItem >
        //                 <img
        //                     src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
        //                     alt=''
        //                 />
        //             </ImageListItem>
        //             <ImageListItem >
        //                 <img
        //                     src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
        //                     alt=''
        //                 />
        //             </ImageListItem>
        //         </ImageList>
        //         <Typography variant='h6' fontWeight={100} mt={2}  >Recent Conversations</Typography>
        //         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        //             <ListItem alignItems="flex-start">
        //                 <ListItemAvatar>
        //                     <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        //                 </ListItemAvatar>
        //                 <ListItemText
        //                     primary="Brunch this weekend?"
        //                     secondary={
        //                         <React.Fragment>
        //                             <Typography
        //                                 sx={{ display: 'inline' }}
        //                                 component="span"
        //                                 variant="body2"
        //                                 color="text.primary"
        //                             >
        //                                 Ali Connors
        //                             </Typography>
        //                             {" — I'll be in your neighborhood doing errands this…"}
        //                         </React.Fragment>
        //                     }
        //                 />
        //             </ListItem>
        //             <Divider variant="inset" component="li" />
        //             <ListItem alignItems="flex-start">
        //                 <ListItemAvatar>
        //                     <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        //                 </ListItemAvatar>
        //                 <ListItemText
        //                     primary="Summer BBQ"
        //                     secondary={
        //                         <React.Fragment>
        //                             <Typography
        //                                 sx={{ display: 'inline' }}
        //                                 component="span"
        //                                 variant="body2"
        //                                 color="text.primary"
        //                             >
        //                                 to Scott, Alex, Jennifer
        //                             </Typography>
        //                             {" — Wish I could come, but I'm out of town this…"}
        //                         </React.Fragment>
        //                     }
        //                 />
        //             </ListItem>
        //             <Divider variant="inset" component="li" />
        //             <ListItem alignItems="flex-start">
        //                 <ListItemAvatar>
        //                     <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        //                 </ListItemAvatar>
        //                 <ListItemText
        //                     primary="Oui Oui"
        //                     secondary={
        //                         <React.Fragment>
        //                             <Typography
        //                                 sx={{ display: 'inline' }}
        //                                 component="span"
        //                                 variant="body2"
        //                                 color="text.primary"
        //                             >
        //                                 Sandra Adams
        //                             </Typography>
        //                             {' — Do you have Paris recommendations? Have you ever…'}
        //                         </React.Fragment>
        //                     }
        //                 />
        //             </ListItem>
        //         </List>
        //     </Box>
        // </Box>

    )
}

export default Rightbar

import Box from '@mui/material/Box';
import React from 'react'
import { Typography, AvatarGroup, Avatar, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Divider } from '@mui/material'

function Rightbar() {
    return (

        <Box flex={2} p={1} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box position='fixed' width={300}>
                <Typography variant='h6' fontWeight={100} mt={2} mb={2} >Online Friends</Typography>
                <AvatarGroup max={6}>
                    <Avatar alt="" src="" />
                    <Avatar alt="Travis Howard" src="" />
                    <Avatar alt="Cindy Baker" src="" />
                    <Avatar alt="Agnes Walker" src="" />
                    <Avatar alt="Trevor Henderson" src="" />
                    <Avatar alt="Agnes Walker" src="" />
                    <Avatar alt="Trevor Henderson" src="" />
                </AvatarGroup>
                <Typography variant='h6' fontWeight={100}>
                    Latest Photos
                </Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem >
                        <img
                            src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
                            alt=''
                        />
                    </ImageListItem>
                    <ImageListItem >
                        <img
                            src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
                            alt=''
                        />
                    </ImageListItem>
                    <ImageListItem >
                        <img
                            src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
                            alt=''
                        />
                    </ImageListItem>
                </ImageList>
                <Typography variant='h6' fontWeight={100} mt={2}  >Recent Conversations</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>

    )
}

export default Rightbar

import {Box, Card, Typography, CardMedia, CardContent, CardActions, Avatar, IconButton, CardHeader, Checkbox } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import React from 'react'
import { Favorite, FavoriteBorder, MoreVert } from '@mui/icons-material';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';

function Posts() {
  return (
    <div>
      <Card sx={{margin:3}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'black' }} aria-label="recipe">
              M
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Muhammad Nishad"
          subheader="5 minutes ago"
        />
        <CardMedia
          component="img"
          height={500}
          width={100}
          image="https://images.pexels.com/photos/39003/scotland-united-kingdom-england-isle-of-skye-39003.jpeg?cs=srgb&dl=pexels-pixabay-39003.jpg&fm=jpg"
          alt="A"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            hey !its my first post
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox  icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:'red'}} /> }  />
          </IconButton>
          <CommentOutlinedIcon/>
          {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}

        </CardActions>
       
      </Card>
    </div>
  )
}

export default Posts

import { Box } from '@mui/material';
import React from 'react'
import Posts from '../Post/Posts';
// import Posts from '../posts/Post'


function Feed() {
  return (

    <Box flex={4} p={1}   >
     <Posts/>
     <Posts/>
     <Posts/>
     <Posts/>
    </Box>
  )
}

export default Feed

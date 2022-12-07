import { Box } from '@mui/material';
import React from 'react'
import Posts from '../Post/Posts';


function Feed({posts,dispatch}) {
  return (

    <Box flex={4} p={1}   >
     <Posts posts={posts} dispatch={dispatch} />
    </Box>
  )
}

export default Feed

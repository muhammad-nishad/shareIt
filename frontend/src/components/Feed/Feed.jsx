import { Box } from '@mui/material';
import React from 'react'
import Posts from '../Post/Posts';


function Feed() {
  return (

    <Box flex={4} p={1}   >
     <Posts/>
    </Box>
  )
}

export default Feed

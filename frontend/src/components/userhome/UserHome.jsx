import React, { useState } from 'react'
import Feed from '../Feed/Feed'
import Rightbar from '../Rightbar/Rightbar'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import { Stack, Box, createTheme, ThemeProvider } from '@mui/material'
import Add from '../Add/Add'
import { light } from '@mui/material/styles/createPalette'
import { useParams } from 'react-router-dom'
import community from '../../pages/community/Community'
import Community from '../../pages/community/Community'




function UserHome() {
  const [mode, setMode] = useState("light")
  let {type} = useParams()
  type = type === undefined ? "home" : type;
  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme} color={'text.white'}>
    <Box bgcolor={'background.default'}>
      <Navbar />
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Sidebar />
       {type==="home" ? <Feed />
       :type=="community" ? <Community/>
:""       }
        <Rightbar />
      </Stack>
      <Add/>
     
    </Box>
      </ThemeProvider>
  )
}

export default UserHome

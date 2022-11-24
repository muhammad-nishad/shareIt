import React, { useState } from 'react'
import Feed from '../Feed/Feed'
import Rightbar from '../Rightbar/Rightbar'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import { Stack, Box, createTheme, ThemeProvider } from '@mui/material'
import Add from '../Add/Add'
import { light } from '@mui/material/styles/createPalette'




function UserHome() {
  const [mode, setMode] = useState("light")
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
        <Feed />
        <Rightbar />
      </Stack>
      <Add/>
    </Box>
      </ThemeProvider>
  )
}

export default UserHome

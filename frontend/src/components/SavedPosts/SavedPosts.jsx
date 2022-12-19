import { Box } from '@mui/material'
import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import Post from '../Post/Post'

export default function SavedPosts() {
  const [post,setPost]=useState([])
  const [users,setUsers]=useState()
  let tokenData = Cookies.get('user')
  tokenData = JSON.parse(tokenData)
  const { token } = tokenData
  const savedPosts=()=>{
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/getallSavedPosts`,{headers:{token:token}}).then(({data})=>{
      setPost(data.savedPosts)
    })
  }
  useEffect(()=>{
    savedPosts()

  },[])
  return (
    <>
    <Box flex={4} p={1} sx={{
        display:'flex',
        flexDirection: 'column',
        alignContent: 'center',
        flexWrap: 'wrap',
    }}   >
      

    { 
    post &&
    post.map((post)=> (<Post   post={post.post} savedPost  />))  
    
  }
  </Box>
  

    




    </>
  )
}

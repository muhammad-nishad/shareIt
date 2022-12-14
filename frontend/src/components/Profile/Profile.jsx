import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import { useSelector } from 'react-redux'
import { postsReducer } from '../../functions/reducers'
import Navbar from '../Navbar/Navbar'
import Post from '../Post/Post'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Userprofile/Topbar'

export default function Profile() {
  const [{ posts }, dispatch] = useReducer(postsReducer, { posts: [] })
  // const [posts,setPosts]= useState([])
  console.log(posts,'posts');
  const {user} = useSelector(state => ({ ...state }))
  const refresh = useSelector((state)=> state.user.refresh)
  useEffect(() => {
    const token = user?.token
    console.log(user,'getpost userprofile');
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/getUserProfile`, { headers: { token: token } }).then(({ data }) => {
      console.log(data,'getuserprofile');
      // setPosts(data.post)
      dispatch({
        type: "POSTS_SUCCESS",
        payload: data.post
      })
    }).catch(err => {
      console.log(err, 'catch block of axios');
    })
  }, [refresh])
  return (
    <>
    <Navbar />
    
    <Topbar/>

    <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
    <div style={{maxWidth:"50%"}} >

    {
     
      posts?.map((post) => (<Post key={post._id} post={post} />))
    }
    {/* {
      posts._id
    } */}
    </div>
    </div>

    

    </>
  )
}

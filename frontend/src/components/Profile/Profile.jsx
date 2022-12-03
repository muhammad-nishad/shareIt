import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import { useSelector } from 'react-redux'
import { postsReducer } from '../../functions/reducers'
import Navbar from '../Navbar/Navbar'
import Post from '../Post/Post'

import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Userprofile/Topbar'

export default function Profile() {
  const [{ posts }, dispatch] = useReducer(postsReducer, { posts: [] })
  const {user} = useSelector(state => ({ ...state }))
  const refresh = useSelector((state)=> state.user.refresh)
  useEffect(() => {
    const token = user?.token
    console.log({refresh});
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/getposts`, { headers: { token: token } }).then(({ data }) => {
      dispatch({
        type: "POSTS_SUCCESS",
        payload: data
      })
    }).catch(err => {
      console.log(err, 'catch block of axios');
    })
  }, [refresh])
  return (
    <>
    <Navbar />
    
    <Topbar/>
    <div style={{display:"flex",alignItems:"center",flexDirection:"column",objectFit:"cover"}}>

    {
      posts?.map((post) => (<Post key={post._id} post={post} />))
    }
    </div>
    {/* <Sidebar/> */}
    

    </>
  )
}

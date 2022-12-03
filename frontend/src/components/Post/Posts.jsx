import React, { useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import Post from './Post';
import { useReducer } from "react"
import { postsReducer } from '../../functions/reducers';
import { useSelector } from 'react-redux';



function Posts() {
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
      {
         posts?.map((post) => (<Post key={post._id} post={post} />))
      }
    </>
  )
}

export default Posts

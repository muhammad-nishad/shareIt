import React, { useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import Post from './Post';
import { useReducer } from "react"
import { postsReducer } from '../../functions/reducers';
import { useSelector } from 'react-redux';



function Posts() {
  const [{ posts }, dispatch] = useReducer(postsReducer, { posts: [] })
  console.log(posts);
  const {user} = useSelector(state => ({ ...state }))
  console.log(user,'user.token')
  useEffect(() => {
    const token = user?.token
    // console.log(token,'tokennnn');

    axios.get(`${process.env.REACT_APP_BACKEND_URL}/getposts`, { headers: { token: token } }).then(({ data }) => {
      console.log(data,'post adding');
      dispatch({
        type: "POSTS_SUCCESS",
        payload: data
      })
    }).catch(err => {
      console.log(err, 'catch block of axios');
    })
  }, [])
  return (
    <>
      {
        posts && posts.map((post) => (<Post post={post} />))
      }
    </>
  )
}

export default Posts

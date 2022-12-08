import React, { useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import Post from './Post';
import { useReducer } from "react"
import { postsReducer } from '../../functions/reducers';
import { useSelector } from 'react-redux';



function Posts({posts,dispatch}) {

  const user = JSON.parse(Cookies.get("user"))
  // const { user } = useSelector(state => ({ ...state }))
  const refresh = useSelector((state) => state.user.refresh)
  useEffect(() => {
    console.log(user)
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/getposts`, { headers: { token: user?.token } }).then(({ data }) => {
      dispatch({
        type: "POSTS_SUCCESS",
        payload: data
      })
      console.log("done")
    }).catch(err => {
      console.log(err, 'catch block of axios');
    })
  }, [])
  console.log(user?.email)
  return (
    <>
      {
        posts?.map((post) => (<Post  key={post._id} post={post} />))
      }
    </>
  )
}

export default Posts

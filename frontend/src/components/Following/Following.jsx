import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import UserCard from '../UserCard'
import { useDispatch, useSelector } from 'react-redux'

export default function Following({ Following }) {
  const [user,setUser]=useState()
  let tokenData = Cookies.get('user')

  tokenData = JSON.parse(tokenData)
  const { token } = tokenData
  const [follow,setFollow]=useState(false)
  const dispatch = useDispatch()


   const followUser = async (id) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/follow`, { userid: id }, { headers: { token: token } }).then((response) => {
            console.log(response,'follow2222');
            dispatch({ type: 'REFRESH' })
            // setFollow(true)
        })
    }

    const getAllFollowing = async (id) => {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/getallFollowing`, { headers: { token: token } }).then((response) => {
          console.log(response.data, 'response');
          setUser(response.data)
          setFollow(true)
      })
  }





  useEffect(() => {
    getAllFollowing()
    // followUser()

  }, [])
  return (
    <>
      {/* <UserCard /> */}


      {
      user && user.following.map((user)=>(
        <UserCard  data={user}  />
      ))
    }

    </>
  )
}

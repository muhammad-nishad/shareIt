import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import UserCard from '../UserCard'

export default function Following({ Following }) {
  const [user,setUser]=useState()
  let tokenData = Cookies.get('user')

  tokenData = JSON.parse(tokenData)
  const { token } = tokenData


  // const getAllFollowing = async (id) => {
  //   axios.get(`${process.env.REACT_APP_BACKEND_URL}/getallFollowing`, { headers: { token: token } }).then((response) => {
  //       console.log(response.data, 'response');
  //       // setUsers(response.data)
  //   })
  // }
  const getAllFollowing = async (id) => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/getallFollowing`, { headers: { token: token } }).then((response) => {
      console.log(response.data, 'response');
      setUser(response.data)
    })
  }
  useEffect(() => {
    getAllFollowing()

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

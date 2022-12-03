import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import UserCard from '../UserCard'

export default function Following() {
  let tokenData=Cookies.get('user')
  const [users,setUsers] = useState()
  tokenData=JSON.parse(tokenData)
  const {token}=tokenData
  const followingUser=async()=>{
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/getallFollowing`,{headers:{token:token}}).then((response)=>{
      console.log(response,'response');
      setUsers(response.data)
    })
  }
  useEffect(()=>{
    followingUser()

  },[])
  return (
    <>

    
    {
      users && users.following.map((user)=>(
        <UserCard  data={user} />
      ))
    }

    </>
  )
}

import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import UserCard from '../UserCard'

export default function Following() {
  let tokenData=Cookies.get('user')
  
  tokenData=JSON.parse(tokenData)
  const {token}=tokenData
  const followingUser=async()=>{
  }
  useEffect(()=>{
    followingUser()

  },[])
  return (
    <>
    <UserCard/>

    
    {/* {
      users && users.following.map((user)=>(
        <UserCard  data={user}  />
      ))
    } */}

    </>
  )
}

import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import People from '../People/People'
import UserCard from '../UserCard'

export default function Followers({ followers }) {
    const [user,setUser]=useState()
    let tokenData = Cookies.get('user')
    tokenData = JSON.parse(tokenData)
    const { token } = tokenData

    const followerss = async () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/getallFollowers`, { headers: { token: token } }).then((response) => {
            setUser(response.data)
            
        })
    }
    useEffect(() => {
        followerss()
    }, [])
    return (
        <>
        {
            user && user.followers.map((user)=>(
                <UserCard data={user} />
                
            ))
        }
            
        </>
    )
}

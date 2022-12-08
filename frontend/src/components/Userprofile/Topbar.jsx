import { Avatar } from '@mui/material'
import { height, margin, padding } from '@mui/system'
import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import './topbar.css'

export default function Topbar() {
    let tokenData = Cookies.get('user')
    tokenData = JSON.parse(tokenData)
    const { token } = tokenData
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/getUserProfile`, { headers: { token: token } }).then(({ data }) => {
            console.log(data,'userprofile');
            setUser(data.user)
            setPosts(data.post)

        })
    }, [])
    return (
        <div style={{ maxWidth: "600px", margin: "0px auto" }}>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "18px 0px",
                borderBottom: "1px solid grey"
            }}>
                <div>
                    <img  onClick={()=>{
                        
                        
                        console.log('image clicked');
                    }} style={{ width: "160px", height: "160px", borderRadius: '80px',cursor:'pointer' }}
                        src='icons/blankprofile.webp'
                    />
                </div>
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", paddingRight: "120px", gap: "30px", fontWeight: 300 }}>
                    <h3>{user?.user_name && user.user_name}</h3>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "140%" }}>
                        <h6>{posts && posts.length} posts</h6>
                        <h6>{user?.followers && user?.followers.length} followers</h6>
                        <h6>{user?.following && user?.following.length} following</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

import { Button } from '@mui/material'
import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react'

function UserCard({data,follow}) {
    let tokenData = Cookies.get('user')
    tokenData = JSON.parse(tokenData)
    const { token } = tokenData

    const unfollowUser=async(id)=>{
        console.log(id,'userid');
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/unfollow`,{ userid: id }, { headers: { token: token } }).then((response)=>{
            console.log(response);
        })
    }





    // const handleUnfollow =()=>{
    //     unfollow(data._id)
    // }
  return (
    <div style={{ width: "10vw", display: "flex", paddingTop: 25, paddingLeft: 30, gap: 12 }}>
    <div style={{ border: "1px solid black" }}>
        <img style={{ width: "10vw" }} src='icons/nishad.jpeg' />
        <div>

            {
                data.user_name
            }
        </div>
        {
            follow ? 
            <Button style={{alignItems:"center"}} onClick={()=>follow(data._id)} variant="contained" >Follow</Button>
            :
            <Button onClick={()=>unfollowUser(data._id)}variant="contained" >Unfollow</Button>

        }
    </div>

</div>
)
}

export default UserCard
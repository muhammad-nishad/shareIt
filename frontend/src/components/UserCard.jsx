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
    <div style={{ width: "10vw", display: "flex",alignItems:"center",flexDirection:"center" ,paddingTop: 25, paddingLeft: 30, gap: 12 }}>
    <div style={{ border: "0px solid black",display: "flex",alignItems:"center",flexDirection:"column",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2) 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
        <img style={{ width: "10vw",borderRadius:20 }} src='icons/nishad.jpeg' />
        <div style={{marginTop:10}}>

            {
                data.user_name
            }
        </div>
        {
            follow ? 
            <Button style={{display:"flex",paddingTop:10}} onClick={()=>follow(data._id)} variant="contained" >Follow</Button>
            :
            <Button onClick={()=>unfollowUser(data._id)}variant="contained" >Unfollow</Button>

        }
    </div>

</div>
)
}

export default UserCard
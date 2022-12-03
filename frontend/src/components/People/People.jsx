import { Button } from '@mui/material'
import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { useEffect } from 'react'
import UserCard from '../UserCard'

export default function People() {
    let tokenData = Cookies.get('user')
    tokenData = JSON.parse(tokenData)
    const { token } = tokenData

    const [users, setUsers] = useState([])
    const followUser = async (id) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/follow`, { userid: id }, { headers: { token: token } }).then((response) => {
            console.log(response, 'response');
        })
    }




    const getUser = async () => {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/authorizer/getUsers`)
        setUsers(response.data)
    }
    useEffect(() => {
        getUser();


    }, [])
    return (
        <>
         {
            users?.map((data) =>(
                <UserCard follow={followUser}  data={data} />
            )
                // <div style={{ width: "10vw", display: "flex", paddingTop: 25, paddingLeft: 30, gap: 12 }}>
                //     <div style={{ border: "1px solid black" }}>
                //         <img style={{ width: "10vw" }} src='icons/nishad.jpeg' />
                //         <div>

                //             {
                //                 data.user_name
                //             }
                //         </div>
                //         <Button onClick={() => {
                //             followUser(data._id)
                //         }} variant="contained" >Follow</Button>
                //     </div>



                // </div>
                )}

        </>
    )
}

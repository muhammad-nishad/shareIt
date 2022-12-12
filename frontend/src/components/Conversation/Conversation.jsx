import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Conversation({ data, currentUserId }) {

    const [userData, setUserData] = useState(null)
    console.log(currentUserId, 'id');

    useEffect(() => {
        const userId = data.members.find((id) => id !== currentUserId)
        console.log(userId, 'idddd');

        const getUserData = async () => {
            try {
                axios.get(`${process.env.REACT_APP_BACKEND_URL}/getUser/${userId}`).then(({ data }) => {
                    setUserData(data)
                    console.log(data, 'data');
                })

            } catch (error) {
                console.log(error);
            }



        }
        getUserData()

    }, [])
    return (
        <div className='follower conversation'>
            <div>
                <div className='online-dot'></div>
                <img src={userData?.profilePicture }alt=''
                className='followerImage'
                style={{width:'50px',height:'50px'}}
                
                />
                <div className='name' style={{fontSize:"0.8rem"}} >
                    <span>{userData?.first_name} {userData?.last_name}  </span>
                    <span>Online</span>

                </div>

            </div>

        </div>
    )
}

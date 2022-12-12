import { ChatSharp } from '@mui/icons-material';
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import Conversation from '../../components/Conversation/Conversation';
import './Chat.css'

export default function Chat() {

    // const {user}=useSelector((state)=> state)
    const { user } = useSelector(state => ({ ...state }))
    // console.log(user._id,"userr");

    const [chats,setChats]=useState([])

    useEffect(()=>{
        const getChats=async()=>{
             axios.get(`${process.env.REACT_APP_BACKEND_URL}/chat/${user._id}`).then(({data})=>{
                setChats(data)
                console.log(data,'response');

             })
        }
        getChats()

    },[user])
    console.log(user._id,'userid');






    return (
        <div className='Chat'>
            <div className='Left-side-chat'>
                <div className='Chat-container'>

                    <h2>Chats</h2>
                    <div className='chat-list'>
                        {chats.map((chats)=>(
                            <div>

                                <Conversation  data={chats} currentUserId={user._id}/>




                            </div>
                        )
                        )}
                        

                    </div>
                </div>

            </div>
            <div className='Right-side-chat'>
                right side

            </div>

        </div>
    )
}

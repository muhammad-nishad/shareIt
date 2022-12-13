import { ChatSharp } from '@mui/icons-material';
import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import ChatBox from '../../components/ChatBox/ChatBox';
import Conversation from '../../components/Conversation/Conversation';
import './Chat.css'
import { io } from 'socket.io-client'

export default function Chat() {
    const { user } = useSelector(state => ({ ...state }))
    console.log(user._id, 'jjjjj');
    const [chats, setChats] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const [sendMessage, setSendMessage] = useState(null)
    const [receieveMessage, setReceieveMessage] = useState(null)
    const socket = useRef()


    // sending message to socket server
    useEffect(() => {
        if (sendMessage !== null) {
            socket.current.emit('send-message', sendMessage)
        }

    }, [sendMessage])

   





    useEffect(() => {
        socket.current = io('http://localhost:8800')
        socket.current.emit("new-user-add", user._id)
        socket.current.on('get-users', (users) => {
            setOnlineUsers(users)

        })

    }, [user])
    
     // receive message from socket server
     useEffect(() => {
        socket.current.on("receive-message", (data) => {
            setReceieveMessage(data)

        })

    }, [])



    useEffect(() => {
        const getChats = async () => {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/chat/${user._id}`).then(({ data }) => {
                setChats(data)
                console.log(data, 'response');
            })
        }
        getChats()
    }, [user])



    return (
        <div className='Chat'>
            <div className='Left-side-chat'>
                <div className='Chat-container'>
                    <h2>Chats</h2>
                    <div className='chat-list'>
                        {chats.map((chats) => (
                            <div onClick={() => setCurrentChat(chats)}  >
                                <Conversation data={chats} currentUserId={user._id} />
                            </div>
                        )
                        )}
                    </div>
                </div>
            </div>
            <div className='Right-side-chat'>
                {/* chat body */}
                <ChatBox chat={currentChat} currentUser={user._id}
                    setSendMessage={setSendMessage} receieveMessage={receieveMessage}
                />
            </div>
        </div>
    )
}

import { PhotoCamera, Refresh } from '@mui/icons-material'
import { Avatar, Box, Button, IconButton, Modal, Typography } from '@mui/material'
import { height, margin, padding } from '@mui/system'
import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import './topbar.css'
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from 'react-redux'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Topbar({ id, profile, post }) {
    const uploadImage = () => {
        const formData = new FormData()
        console.log(image, 'image');
        formData.append("file", image)
        formData.append("upload_preset", "kacy6ucl")
        console.log(formData, 'formm');

        axios.post("https://api.cloudinary.com/v1_1/dl0nkbe8b/image/upload", formData).then((response) => {
            const img = response.data.url
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/addProfilePicture`, { img }, { headers: { token: token } }).then((data) => {
                console.log(data, 'data');
            })

        })

    }
    
    let tokenData = Cookies.get('user')
    tokenData = JSON.parse(tokenData)
    const { token } = tokenData
    // const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    const [modal, setModal] = useState(false)
    const [follow,setFollow]=useState(false)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [image, setImage] = useState()
    const { user } = useSelector(state => ({ ...state }))
    useEffect(()=>{
        if(user?.following.includes(id)){
            console.log('alredy follow');
            setFollow(false)
        }else{
            console.log('not foloing');
            setFollow(true)
        }

    },[])




    return (
        <div style={{ maxWidth: "600px", margin: "0px auto" }}>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "18px 0px",
                borderBottom: "1px solid grey"
            }}>
                <div>
                    <img onClick={handleOpen} style={{ width: "160px", height: "160px", borderRadius: '80px', cursor: 'pointer', objectFit: "cover" }}
                        src={profile && profile.profilePicture ? profile.profilePicture : '/icons/blankprofile.webp'}
                    />

                    {
                        user?._id === profile?._id ?
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Button variant="contained" component="label">
                                        Upload
                                        <input onChange={(e) => {
                                            setImage(e.target.files[0]);
                                        }} hidden accept="image/*" type="file" />
                                    </Button>
                                    <IconButton color="primary" aria-label="upload picture" component="label">
                                        <input hidden accept="image/*" type="file"
                                        />
                                    </IconButton>
                                    <Button onClick={uploadImage} variant="contained" endIcon={<SendIcon />}>
                                        Send
                                    </Button>
                                </Box>
                            </Modal>
                            : null
                    }

                </div>
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", paddingRight: "120px", gap: "30px", fontWeight: 300 }}>
                    <h3 style={{display:'flex', width:"100%"}} >{profile?.first_name && profile.first_name}</h3>
                    {
                        user?._id == profile?._id ? <button  style={{ backgroundColor: "white", color: "black", borderRadius: "7px", height: '34px', border: '1px solid', cursor: "pointer", width: "90px", marginLeft: "10px" }}>Edit profile</button> 
                        :
                            <div>
                                {
                                    follow ?  
                                    <button  style={{ backgroundColor: '#47afff', color: "white", borderRadius: "7px", height: '34px', width: '90px', border: 'aliceblue', cursor: "pointer" }} >follow</button>
                                    : 
                                    <>
                                    <button style={{ backgroundColor: "white", color: "black", borderRadius: "7px", height: '34px', border: '1px solid', cursor: "pointer", width: "90px", marginLeft: "10px" }}>message</button>
                                    <button  style={{ backgroundColor: "#47afff", color: "white", borderRadius: "7px", height: '34px', border: '1px solid', cursor: "pointer", width: "90px", marginLeft: "10px" }}  >unfollow</button>
                                    </>
                                    
                                }

                            </div>
                    }

                    <div style={{ display: "flex", justifyContent: "space-between", width: "140%" }}>
                        <h6>{post && post.length} posts</h6>
                        <h6>{profile?.followers && profile?.followers.length} followers</h6>
                        <h6>{profile?.following && profile?.following.length} following</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

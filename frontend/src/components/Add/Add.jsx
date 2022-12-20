import { Fab, Modal, Tooltip, Box, styled, Typography, Avatar, TextField, ButtonGroup, Button } from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Stack } from '@mui/system'
import './add.css'
import axios, { Axios } from 'axios'
import Cookies from 'js-cookie'
import { useReducer } from "react"
import { postsReducer } from '../../functions/reducers';
import { useSelector } from 'react-redux'
import { useEffect } from 'react'


const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center'
})

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: "center",
    gap: '10px',
    marginBottom: "20px"
})

function Add({ dispatch }) {
    let token1 = Cookies.get('user')
    token1 = JSON.parse(token1)
    const { token } = token1

    const upload=()=>{
        if(imageSelected){
            uploadImage()
        }else{
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/posts`, {  description }, { headers: { token: token } }).then(({ data }) => {
                console.log(data, 'responseof post addd');
                dispatch({
                    type: "NEW_POST",
                    payload: data
                })
                setOpen(false)
            })

        }
    }
    const uploadImage = () => {
    
        // alert(URL.createObjectURL(imageSelected))
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "kacy6ucl")
        try {
           
            axios.post("https://api.cloudinary.com/v1_1/dl0nkbe8b/image/upload", formData).then((response) => {
                const img = response.data.url
                axios.post(`${process.env.REACT_APP_BACKEND_URL}/posts`, { img, description }, { headers: { token: token } }).then(({ data }) => {
                    console.log(data, 'responseof post addd');
                    dispatch({
                        type: "NEW_POST",
                        payload: data
                    })
                    setOpen(false)
                })
            })


        } catch (error) {
            console.log(error, 'errrrrrr');

        }

    };
    const { user } = useSelector(state => ({ ...state }))
    const value = useSelector((state) => {
        return state;

    })
    const [open, setOpen] = useState(false)
    const [imageSelected, setImageSelected] = useState()
    const [description, setDescription] = useState()
    const [file, setFile] = useState("");
    return (
        <>
            <Tooltip onClick={e => setOpen(true)}
                title="Delete"
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    left: { xs: "calc(50% - 25px)", md: 30 }
                }}
            >
                <Fab color="primary" aria-label="add ">
                    <AddIcon />
                </Fab>
            </Tooltip>


            <StyledModal
                open={open}
                onClose={e => {setOpen(false)
                    setFile(false)
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description" >
                <Box width={400} maxHeight={680} bgcolor='white' p={3} borderRadius={5} >
                    <Typography variant='h6' color='grey' textAlign='center'>make a post</Typography>
                    <UserBox>
                        <Avatar
                            src={user ? user?.profilePicture : "icons/blankprofile.webp"}
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography fontWeight={500} variant='span'>{user?.first_name}</Typography>
                    </UserBox>
                    {file ? (
                        <img
                            src={file ? file : null}
                            style={{ width: "300px", height: "150px", marginLeft: "45px" }}
                            alt=""
                        />
                    ) : null}
                    <TextField
                        sx={{ width: '100%' }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind ?"
                        variant="standard"
                        name='description'
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    />
                   
                    <Stack direction='row' gap={1} marginTop={2} mb={3}>
                        <input
                            style={{ display: 'none' }}
                            type="file"
                            onChange={(e) => {
                                setImageSelected(e.target.files[0])
                                setFile(URL.createObjectURL(e.target.files[0]));
                            }}
                            id="image_input"
                        />
                        <label className="img_label" htmlFor="image_input" style={{ cursor: "pointer" }} >
                            <Image color='secondary'
                            />
                        </label>
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button onClick={upload} >Post</Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
            {/* {
                imageSelected && (
                    <div style={styles.preview} >
                        <img
                        src={URL.createObjectURL(imageSelected)}

                        />
                        
                    </div>
                )
            } */}

        </>
    )
}

export default Add

const styles = {
    preview: {
        marginTop: 50,
        display: 'flex',
        flexDirection: "column"
    }

}

import { Fab, Modal, Tooltip, Box, styled, Typography, Avatar, TextField, ButtonGroup, Button } from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Stack } from '@mui/system'
import './add.css'
import axios, { Axios } from 'axios'
import Cookies from 'js-cookie'
import { useSelector } from 'react-redux'

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

function Add() {
    const uploadImage = () => {
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "kacy6ucl")
        try {
            let token1 =  Cookies.get('user')
            token1 = JSON.parse(token1)
            const {token } = token1
            console.log(token,'tokennn');
            axios.post("https://api.cloudinary.com/v1_1/dl0nkbe8b/image/upload", formData).then((response) => {
                const img = response.data.url
                return axios.post(`${process.env.REACT_APP_BACKEND_URL}/posts`, { img,description }, { headers: { token: token } }).then((response) => {
                })
            })

        } catch (error) {
            console.log(error, 'errrrrrr');

        }

    };
    const { user } = useSelector(state => ({ ...state }))
    // console.log(user?.user?.first_name)
    const [open, setOpen] = useState(false)
    const [imageSelected, setImageSelected] = useState()
    const [description,setDescription]=useState()
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
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description" >
                <Box width={400} height={280} bgcolor='white' p={3} borderRadius={5} >
                    <Typography variant='h6' color='grey' textAlign='center'>Create Post</Typography>
                    <UserBox>
                        <Avatar
                            src=''
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography fontWeight={500} variant='span'>{user?.user?.first_name}</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: '100%' }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind ?"
                        variant="standard"
                        name='description'
                        onChange={(e)=>{
                            setDescription(e.target.value);
                        }}
                    />
                    <Stack direction='row' gap={1} marginTop={2} mb={3}>
                        <input
                            style={{ display: 'none' }}
                            type="file"
                            onChange={(e) => {
                                setImageSelected(e.target.files[0])
                            }}
                            id="image_input"
                        />
                        <label className="img_label" htmlFor="image_input">
                            <Image color='secondary'
                            />
                        </label>
                    </Stack>
                    <ButtonGroup  fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button    onClick={uploadImage}  >Post</Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add

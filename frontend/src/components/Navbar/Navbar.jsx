import { AppBar, Toolbar, Typography, styled, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Formik, useFormik } from 'formik';
import axios from 'axios';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';

const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%'
}))

const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'flex'
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        display: 'flex'
    }
}))

function Navbar({ color }) {
    const [showSearch, setShowSearch] = useState(false)
    const [searchUser, setSearchUser] = useState([])
    const {user}=useSelector(state=>({...state}))
    console.log(user,'usrfrom redux');
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const formik = useFormik({
        initialValues: {
            users: ''
        }
    })


    // const getSearchUser = async () => {
    //     // const response = await axios.get(`http://localhost:8000/usersearch/${formik.values.users}`)
    //     const response=await axios.get(`${process.env.REACT_APP_BACKEND_URL}/usersearch/${formik.values.users}`)
    //     // console.log(response.data,'serarchhgfgkfjk');
    //     setSearchUser(response.data)
    // }
    // useEffect(() => {
    //     getSearchUser();
    // }, [formik.values.users])
    return (



        <AppBar position='sticky' >
            < StyledToolBar>
                <Typography onClick={()=>{
                    Navigate('/')
                }} variant='h6' sx={{ display: { xs: 'none', sm: 'block',cursor:"pointer" } }}>
                    ShareIt
                </Typography>
                {/* <Search sx={{ width: "20%", left: "50%" }}>
                    <InputBase
                        placeholder='search'
                        name='users'
                        onChange={formik.handleChange}
                        value={formik.values.users}
                        onClick={() => (setShowSearch(true))}
                    />
                </Search> */}

                {searchUser? searchUser.map((users)=>{
                    return (
                        <Box sx={{ width: "20%", backgroundColor: 'white', position: 'absolute', left: "38.5%", height: "50%", top: "85%", color: "black" }}>
                        {users.first_name? users.first_name: null}
                      </Box>
                      

                    )
                })
                   
                    : ""
                }
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon />
                    </Badge>
                    {
                        !user?.profilePicture? <Avatar  onClick={e => setOpen(true)}  alt="B" src='icons/blankprofile.webp' sx={{ width: 30, height: 30 ,cursor:"pointer"}}/> :
                        
                    <Avatar alt="B" src={user.profilePicture} sx={{ width: 30, height: 30 ,cursor:"pointer"}}
                    onClick={e => setOpen(true)}
                    
                    />
                }

                </Icons>
                <UserBox>
                    <Avatar alt="A" src="/static/images/avatar/1.jpg" sx={{ width: 30, height: 30 }}
                        onClick={e =>
                            setOpen(true)}

                    />
                    {/* <Typography variant='span'>Nishad</Typography> */}
                </UserBox>
            </StyledToolBar>
            <Menu 

                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={() => {
                    Navigate('/profile')

                }} >Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem onClick={() => {
                    Cookies.remove('user')
                    dispatch({ type: 'LOGOUT', payload: null })
                    Navigate('/login')
                }}>Logout</MenuItem>
            </Menu>
        </AppBar>

    )
}

export default Navbar

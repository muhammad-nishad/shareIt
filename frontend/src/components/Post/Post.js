import { Box, Card, Typography, CardMedia, CardContent, CardActions, Avatar, IconButton, CardHeader, Checkbox, Collapse, styled, TextField, Button, Modal, Menu, MenuItem, Fade } from '@mui/material';
// import ShareIcon from '@mui/icons-material/Share';
import { Favorite, FavoriteBorder, MoreVert } from '@mui/icons-material';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
import { IconButtonProps } from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: '2%',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));



export default function Post({ post }) {
    const { user } = useSelector(state => ({ ...state }))
    const [likes, setLikes] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const dispatch = useDispatch()
    //menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };




    useEffect(() => {
        post.likes.map((likes) => {
            if (likes._id === user.id) {
                setLikes(true)
            }
        })
    }, [])
    //useselector

    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    let userToken = Cookies.get('user')
    userToken = JSON.parse(userToken)
    const addLike = () => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/likePost`, { postid: post._id }, { headers: { token: userToken.token } }).then(({ data }) => {
            dispatch({ type: 'REFRESH' })
        })

    }
    const formik = useFormik({
        initialValues: {
            comment: ''
        },
        onSubmit: (values, { resetForm }) => {
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/addcomment`, { values, postid: post._id }, { headers: { token: userToken.token } }).then(({ data }) => {
                dispatch({ type: 'REFRESH' })
                resetForm({ values: '' })
            })
        }

    })
    const reportPost = () => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/reportPost`, { postid: post._id }, { headers: { token: userToken.token } }).then((response) => {
        })

    }
    return (
        <>
            <Card sx={{ margin: 3 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: 'black' }} aria-label="recipe">
                            M
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert onClick={handleClick} />

                        </IconButton>
                    }
                    title={post.userid.first_name}

                    subheader="5 minutes ago"
                />
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}

                >

                    {user.user._id === post.userid._id ?
                        <MenuItem onClick={reportPost}>
                            Delete Post</MenuItem>
                        :

                        <MenuItem onClick={reportPost}>
                            Report Post</MenuItem>
                    }
                </Menu>

                {
                    post.img.map((img) => (<CardMedia
                        component="img"
                        height={300}
                        width={50}
                        image={img}
                        alt="A"
                    />))
                }
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {post?.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favoritess">
                        {post.likes.length}
                        <p> like</p>
                        <Checkbox onClick={addLike}
                            icon={!likes ? <FavoriteBorder /> : <Favorite sx={{ color: 'red' }} />} checkedIcon={<Favorite sx={{ color: 'red' }} />}
                        />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <CommentOutlinedIcon />
                    </ExpandMore>
                    {post.comments.length}
                    comment
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Box sx={{ maxHeight: 200, overflowY: 'scroll' }}>
                            <form onSubmit={formik.handleSubmit}>
                                {
                                    post.comments.map((comment) => {
                                        return (
                                            <p key={comment.comment} >{comment.comment}</p>
                                        )
                                    })
                                }
                                <TextField
                                    name='comment'
                                    value={formik.values.comment}
                                    onChange={formik.handleChange}
                                    fullWidth
                                    variant='standard'
                                />
                                <Button type='submit'>Send</Button>
                            </form>
                        </Box>
                    </CardContent>
                </Collapse>
            </Card>
        </>
    )

}

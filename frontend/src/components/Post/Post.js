import { Box, Card, Typography, CardMedia, CardContent, CardActions, Avatar, IconButton, CardHeader, Checkbox, Collapse, styled, TextField, Button, Modal, Menu, MenuItem, Fade } from '@mui/material';
import { Favorite, FavoriteBorder, MoreVert } from '@mui/icons-material';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
import { IconButtonProps } from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CloseIcon from '@mui/icons-material/Close';
import Moment from 'react-moment';
import swal from 'sweetalert';
import Save from '@mui/icons-material/TurnedInNotOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';


const stylee = {
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


export default function Post({ post, savedPost }) {
    const { user } = useSelector(state => ({ ...state }))
    const [likes, setLikes] = useState(false)
    const [save,setSave]=useState(false)
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
        // post.likes.map((likes) => {
        //     if (likes._id === user.id) {
        //         setLikes(true)
        //     }
        // })
        console.log({userid : post.likes});
        if(post?.likes.includes(user?._id)){
            setLikes(true)
        }else{
            setLikes(false)
        }
    }, [post])
    //useselector

    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    let userToken = Cookies.get('user')
    userToken = JSON.parse(userToken)
    const addLike = () => {
        console.log('like function');
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/likePost`, { postid: post._id }, { headers: { token: userToken.token } }).then((data) => {
            setLikes(true)
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
            console.log(response, 'report');
        })

    }

    const savePost = () => {
        setSave(true)
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/savedPost`, { postid: post._id, }, { headers: { token: userToken.token } }).then((response) => {
            dispatch({ type: 'REFRESH' })
            console.log(response, 'save');
        })
    }
    const [openn, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClosee = () => setOpen(false);
    if (savedPost) console.log(post)
    return (
        <>
            <Card sx={{ marginY: "25px",maxWidth:"30rem" }}>
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
                    title={savedPost ? post?.post?.user.first_name : post?.userid?.first_name}
                    subheader={<Moment fromNow interval={30}>
                        {post.createdAt}
                    </Moment>}
                />
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={stylee}>

                        {user?._id == post?.userid?._id ? <Button>Delete Post</Button> : (<>
                            <div style={{ display: "flex", flexDirection: "row-reverse", transform: "translateY(-21px)" }}>
                                <CloseIcon />

                            </div>

                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Please select a problem
                            </Typography>
                            <div style={{ marginTop: "2px" }}>


                                <Typography  >Nudity</Typography>

                            </div>
                            <div style={{ display: "flex", flexDirection: "row-reverse", transform: "translateY(-21px)" }}>
                                <NavigateNextIcon onClick={() => {
                                    console.log('nudity');
                                    swal(" Thanks for letting us know!", "Your feedback is sended. !", "error");
                                    handleOpen()

                                }}

                                />
                            </div>
                            <Typography>Terrorism</Typography>
                            <div style={{ display: "flex", flexDirection: "row-reverse", transform: "translateY(-21px)" }}>
                                <NavigateNextIcon onClick={() => {
                                    reportPost()
                                    swal(" Thanks for letting us know!", "Your feedback is sended. !", "error");
                                }} />
                            </div>
                            <Typography>Violence</Typography>
                            <div style={{ display: "flex", flexDirection: "row-reverse", transform: "translateY(-21px)" }}>
                                <NavigateNextIcon onClick={() => {
                                    swal(" Thanks for letting us know!", "Your feedback is sended. !", "error");
                                }} />
                            </div>
                        </>
                        )}
                    </Box>
                </Modal>
                {
                    post.img.map((img) => (<CardMedia
                        component="img"
                        height={"400"}
                        image={img}
                        alt="A"
                    />))
                }
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {post?.description}
                    </Typography>
                </CardContent>
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                    <span style={{ display: "flex", justifyContent: "space-around" }} >
                        {post?.likes?.length}
                        likes
                    </span>
                    <span>
                        {post?.comments?.length}
                        comments
                    </span>
                </div>

                <hr />

                <CardActions disableSpacing sx={{ display: "flex", justifyContent: "space-around" }}>
                    <IconButton aria-label="add to favoritess" size='small'>
                        <Checkbox onClick={addLike}
                            icon={!likes ? <Favorite sx={{ color: 'grey' }} /> : <Favorite sx={{ color: 'red' }} />} checkedIcon={<Favorite sx={{ color: 'red' }} />}
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
                    {
                        !save? <Save onClick={savePost}
                        />
                         :
                         <BookmarkOutlinedIcon onClick={savePost}  />
                
                }
                    
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

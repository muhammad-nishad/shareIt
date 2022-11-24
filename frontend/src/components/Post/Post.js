import { Box, Card, Typography, CardMedia, CardContent, CardActions, Avatar, IconButton, CardHeader, Checkbox, Collapse, styled, TextField, Button } from '@mui/material';
// import ShareIcon from '@mui/icons-material/Share';
import { Favorite, FavoriteBorder, MoreVert } from '@mui/icons-material';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
import { IconButtonProps } from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import SendIcon from '@mui/icons-material/Send';



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
    console.log(post,'post');
    // let liked = false;
    const { user } = useSelector(state => ({ ...state }))
    // post.likes.map(id => {
    //     if(id == user.user._id ){
    //         liked = true
    //     }
    // })


    //useselector

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    let userToken = Cookies.get('user')
    userToken = JSON.parse(userToken)

    const addLike = () => {
        console.log(userToken.token, 'token');
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/likePost`, { postid: post._id }, { headers: { token: userToken.token } }).then(({ data }) => {
            console.log({ data });
        })

    }
    const formik = useFormik({
        initialValues: {
            comment: ''
        },
        onSubmit: (values, { resetForm }) => {
            console.log('values ', values)
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/addcomment`, { values, postid: post._id }, { headers: { token: userToken.token } }).then(({ data }) => {
                console.log(data, 'dataaa');
                resetForm({ values: '' })
            })
        }

    })
    console.log(formik.values.comment, 'comment');
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
                            <MoreVert />
                        </IconButton>
                    }
                    title={user?.user?.first_name}
                    subheader="5 minutes ago"
                />
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
                        hey !its my first post
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favoritess">
                        <Checkbox onClick={addLike}
                            // {post.}
                            // icon={
                            // liked ? <Favorite sx={{ color: 'red' }} /> : 
                            // <FavoriteBorder />} checkedIcon={
                            // liked ? 
                            // <Favorite sx={{ color: 'red' }} /> :  <FavoriteBorder /> } 

                            icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />}

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
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Box sx={{ maxHeight: 200, overflowY: 'scroll' }}>
                            <form onSubmit={formik.handleSubmit}>
                                
                                    {
                                        post.comments.map((comment)=>{
                                            return(
                                                <p>{comment.comment}</p>
                                            )
                                        })
                                            
                                        
    
                                    }
                                


                                <TextField
                                    name='comment'
                                    value={formik.values.comment}
                                    onChange={formik.handleChange}
                                    fullWidth
                                    variant='standard'
                                    // inputProps={{
                                //     endadornment: <IconButton type='submit'>
                                //         <SendIcon/>
                                //     </IconButton>
                                // }}
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

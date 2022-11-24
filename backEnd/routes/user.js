const express=require('express');
const {register,login,follow,unfollow,posts,updatePost,deletePost,likePost,verifyotp,userSearch,getUserPost,addComment}=require('../controllers/user')
const router=express.Router()
const verifyToken=require('../middlewares/authMiddleware')

router.post('/register',register)
router.post('/login',login)
router.get('/usersearch/:data',userSearch)
// router.post('/verifyotp',verifyotp)
router.put('/:id/follow',verifyToken,follow)
router.put('/:id/unfollow',unfollow)
router.post('/posts',verifyToken,posts)
router.get('/getposts',verifyToken,getUserPost)
router.put('/:id/updatePost',updatePost)
router.delete('/:id/deletePost',deletePost)
router.post('/likePost',verifyToken,likePost)
router.post('/addcomment',verifyToken,addComment)


module.exports=router;

const express=require('express');
const {register,login,follow,unfollow,posts,updatePost,deletePost,likePost,
    verifyotp,userSearch,getUserPost,addComment,getUserProfile,getAllFollowing,
    getAllFollowers,reportPost,getPeopleMayKnow,savePost,getSavedPosts,addProfilePicture}=require('../controllers/user')
const router=express.Router()
const verifyToken=require('../middlewares/authMiddleware')

router.post('/register',register)
router.post('/login',login)
router.get('/usersearch/:data',userSearch)
// router.post('/verifyotp',verifyotp)
router.post('/follow',verifyToken,follow)
router.post('/unfollow',verifyToken,unfollow)
router.post('/posts',verifyToken,posts)
router.get('/getposts',verifyToken,getUserPost)
// router.put('/:id/updatePost',updatePost)
// router.delete('/:id/deletePost',deletePost)
router.post('/likePost',verifyToken,likePost)
router.post('/addcomment',verifyToken,addComment)
router.get('/getUserProfile',verifyToken,getUserProfile)
router.get('/getallFollowing',verifyToken,getAllFollowing)
router.get('/getallFollowers',verifyToken,getAllFollowers)
router.post('/reportPost',verifyToken,reportPost)
router.get('/getPeopleMayKnow',verifyToken,getPeopleMayKnow)
router.post('/savedPost',verifyToken,savePost)
router.get('/getallSavedPosts',verifyToken,getSavedPosts)
router.post('/addProfilePicture',verifyToken,addProfilePicture)


module.exports=router;

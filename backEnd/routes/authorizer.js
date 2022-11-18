const express=require('express');
const {addAdmin,login,getAllUsers}=require('../controllers/admin')
const router=express.Router()

router.post('/authorizer/addadmin',addAdmin)
router.post('/authorizer/login',login)
router.get("/authorizer/getUsers", getAllUsers);


module.exports=router;
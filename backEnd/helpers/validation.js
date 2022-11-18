 const User= require('../models/User')
 
 exports.validateEmail=(email)=>{
    return String(email).toLowerCase().match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/)

 };
 exports.validateLength=(text,min,max)=>{
    if(text.length > max || text.length < min){
        return false;
    }
    return true; 
     
 };
 exports.validateUsername = async (user_name) => {
   let a = false;
 
   do {
     let check = await User.findOne({user_name});
     if (check) {
       //change username
       user_name += (+new Date() * Math.random()).toString().substring(0, 1);
       a = true;
     } else {
       a = false;
     }
   } while (a);
   return user_name;
 };
 
 
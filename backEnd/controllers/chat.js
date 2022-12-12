// const  Chat =('../models/ChatModel')

const ChatModel = require('../models/ChatModel');
// const Chat = require('../models/ChatModel')

exports.createChat = async (req, res) => {
    console.log(req.body);
    const newChat = new Chat({
        members: [req.body.senderId, req.body.receiverId]
    })

    try {
        console.log('hey');
        const result = await newChat.save();
        console.log(result,'result');
        res.status(200).json(result)

    } catch (error) {
        res.status(500).json(error)   

    }
};


exports.userChats = async (req, res) => {
    try {
        const chat = await ChatModel.find({
            members: { $in: [req.params.userId] }
        })
        console.log(chat,'chat');
        res.status(200).json(chat)

    } catch (error) {
        res.status(500).json(error)

    }
}

exports.findChat=async(req,res)=>{
    try {
        const chat=await ChatModel.findOne({
            members:{$all:[req.params.firstId,req.params.sendonId]}})
            res.status(200).json(chat)
        
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}

//last one 


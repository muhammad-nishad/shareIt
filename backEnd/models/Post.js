const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
    {
        userid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
            // required:true
        },
        description: {
            type: String,
            // required:true
        },
        img: {
            type: Array,
        },
        likes: {
            type: Array,
            default: [],
        },
        comments: [
            {
                comment: {
                    type: String
                },
                commentBy: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User'

                },
                createdAt: {
                    type: String,
                    default: new Date().toDateString()
                }
            }
        ],

        report: [
            {

                report: {
                    type: String

                },
                reportedBy: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User'

                },
                createdAt: {
                    type: String,
                    default: new Date().toDateString()
                },
            }
        ],

        date: {
            type: String
        },

    
    
        reportedStatus: {
            type: Boolean,
            default: false,

        },
    }

);

module.exports = mongoose.model("Post", postSchema)
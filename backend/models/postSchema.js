import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    eventName: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
    isLiked: {
        type: Boolean,
        required: true,
        default: false
    }
})

const Post = mongoose.model('Post', postSchema)

export default Post
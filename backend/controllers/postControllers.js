import mongoose from "mongoose";
import asyncHandler from 'express-async-handler'
import Post from "../models/postSchema.js";

//@desc To create post
//@route POST /api/post

export const createPost = asyncHandler(async (req, res) => {

    const { eventName, date, time, location, imageUrl } = req.body

    const post = await Post.create({
        eventName: eventName,
        date: date,
        time: time,
        location: location,
        imageUrl: imageUrl

    })
    if (post) {
        res.status(201).json({
            _id: post._id,
            eventName: post.eventName,
            date: post.date,
            time: post.time,
            location: post.location,
            imageUrl: post.imageUrl,
            isLiked: post.isLiked
        })
    } else {
        res.status(400)
        throw new Error('Invalid User Details')
    }

})

//@desc To like post
//@route PUT /api/post/:id
export const updatePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)

    if (post) {

        post.isLiked = req.body.isLiked

        const updatedPost = await post.save()
        res.json({
            _id: updatedPost._id,
            eventName: updatedPost.eventName,
            date: updatedPost.date,
            time: updatedPost.time,
            location: updatedPost.location,
            imageUrl: updatedPost.imageUrl,
            isLiked: updatedPost.isLiked
        })

    } else {
        res.status(404)
        throw new Error('Post Not Found')
    }
})


//@desc To get all post
//@route GET /api/post

export const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find({})
    res.json(posts)
})


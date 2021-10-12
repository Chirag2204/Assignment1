import express from 'express'
import { createPost, getPosts, updatePost } from '../controllers/postControllers.js';

const router = express.Router();

router.route('/')
    .get(getPosts)
    .post(createPost)

router.route('/:id').put(updatePost)

export default router

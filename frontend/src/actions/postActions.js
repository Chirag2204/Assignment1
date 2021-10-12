import { CREATE_POST_FAIL, CREATE_POST_REQUEST, CREATE_POST_SUCCESS, SHOW_POST_FAIL, SHOW_POST_REQUEST, SHOW_POST_SUCCESS, UPDATE_POST_FAIL, UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS } from "../constants/postConstants";
import axios from 'axios'

export const createPost = (eventName, date, time, location, imageUrl) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_POST_REQUEST })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/post', { eventName, date, time, location, imageUrl }, config);

        dispatch({
            type: CREATE_POST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_POST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const listPosts = () => async (dispatch) => {
    try {
        dispatch({ type: SHOW_POST_REQUEST })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.get('/api/post', config);

        dispatch({
            type: SHOW_POST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SHOW_POST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const updatePost = (id, isLiked) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_POST_REQUEST })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/post/${id}`, { isLiked }, config);

        dispatch({
            type: UPDATE_POST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: UPDATE_POST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
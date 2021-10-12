import { CREATE_POST_FAIL, CREATE_POST_REQUEST, CREATE_POST_SUCCESS, SHOW_POST_FAIL, SHOW_POST_REQUEST, SHOW_POST_SUCCESS, UPDATE_POST_FAIL, UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS } from "../constants/postConstants"

export const postCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_POST_REQUEST:
            return { loading: true }

        case CREATE_POST_SUCCESS:
            return { loading: false, postInfo: action.payload }

        case CREATE_POST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const postUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_POST_REQUEST:
            return { loading: true }

        case UPDATE_POST_SUCCESS:
            return { loading: false, updatedPost: action.payload }

        case UPDATE_POST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const showPostsReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case SHOW_POST_REQUEST:
            return { loading: true, posts: [] }

        case SHOW_POST_SUCCESS:
            return {
                loading: false, posts: action.payload,
            }

        case SHOW_POST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

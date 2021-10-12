import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { postCreateReducer, postUpdateReducer, showPostsReducer } from './reducers/postReducers';


const reducer = combineReducers({
    postCreate: postCreateReducer,
    postUpdate: postUpdateReducer,
    showPosts: showPostsReducer
})

const initialState = {

}
const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store

import {combineReducers} from 'redux';

import posts from './posts';


/**It combines all reducers together */
export default combineReducers({
    posts: posts,
});
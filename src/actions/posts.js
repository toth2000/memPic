import * as api from '../api'; // importing all files from api folder

//Actions Creators
export const getPosts = ()=> async (dispatch) => { //declaring it async according to redux thunk
   
    try{
        const {data} = await api.fetchPosts();
        const action = {type: 'FETCH_ALL', payload: data}; //payload is the data that contains all our post
        dispatch(action); //Redux thunk statement equivalent to return action;
    }catch(err){
        console.log(err);
    }
   
}

export const createPost = (post)=> async (dispatch) => {
    try{
        const {data} = await api.createPost(post);
        const action = {type: 'CREATE', payload: data};
        dispatch(action);
    }catch(err){
        console.log(err);
    }
}

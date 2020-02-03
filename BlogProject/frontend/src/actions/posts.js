import axios from 'axios';
import { GET_POSTS, DELETE_POST, ADD_POST } from './types';

// Get Posts Action
export const getPosts = () => dispatch => {
  axios
    .get('/api/posts/')
    .then(res => {
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// Delete Post Action
export const deletePost = id => dispatch => {
  axios
    .delete(`/api/posts/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_POST,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// Add Post action
export const addPost = post => dispatch => {
  axios
    .post('/api/posts/', post)
    .then(res => {
      dispatch({
        type: ADD_POST,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

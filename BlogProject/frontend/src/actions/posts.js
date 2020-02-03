import axios from 'axios';

import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';
import { GET_POSTS, DELETE_POST, ADD_POST } from './types';

// Get Posts Action
export const getPosts = () => (dispatch, getState) => {
  axios
    .get('/api/posts/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Delete Post Action
export const deletePost = id => (dispatch, getState) => {
  axios
    .delete(`/api/posts/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deletePost: 'Post Deleted' }));
      dispatch({
        type: DELETE_POST,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// Add Post action
export const addPost = post => (dispatch, getState) => {
  axios
    .post('/api/posts/', post, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addPost: 'Post Added' }));
      dispatch({
        type: ADD_POST,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

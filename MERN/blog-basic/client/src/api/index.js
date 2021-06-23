import axios from 'axios';

//const localhost = 'http://localhost:5000';
const heroku = 'https://blog-basic-98.herokuapp.com';

const URL = heroku;

export const fetchPosts = () => axios.get(`${URL}/posts`);

export const createPost = (payload) => axios.post(`${URL}/posts`, payload);

export const updatePost = (payload) => axios.put(`${URL}/posts`, payload);

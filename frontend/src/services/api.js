import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001/api', // Your backend API URL
});

// Interceptor to add the auth token to every request
API.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth endpoints
export const signup = (userData) => API.post('/auth/signup', userData);
export const login = (userData) => API.post('/auth/login', userData);

// Post endpoints
export const getPosts = () => API.get('/posts');
export const createPost = (postData) => API.post('/posts', postData);
export const updatePost = (id, postData) => API.put(`/posts/${id}`, postData);
export const deletePost = (id) => API.delete(`/posts/${id}`);

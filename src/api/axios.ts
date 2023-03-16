import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://api.edamam.com/api/recipes/v2'
})

export default instance;

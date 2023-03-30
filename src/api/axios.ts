import axios from 'axios';

export const instanceRecipe = axios.create({
  baseURL: 'https://api.edamam.com/api/recipes/v2'
})

export const instanceAuth = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1'
})


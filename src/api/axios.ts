import axios from 'axios';

export const instanceRecipe = axios.create({
  baseURL: 'https://api.edamam.com/api/recipes/v2'
})

export const instanceAuth = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1',
})

export const instanceDB = axios.create({
  baseURL: 'https://recipe-ae67c-default-rtdb.europe-west1.firebasedatabase.app',
})

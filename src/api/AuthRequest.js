import axios from "axios"

const API = axios.create({
    baseURL: "vite-back-ajithkumar9242.vercel.app"
})

export const logIn= (formData) => API.post('/auth/login' , formData)
export const signUp= (formData) => API.post('/auth/register' , formData)
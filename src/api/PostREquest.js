import axios from "axios";

const API = axios.create({ baseURL: "vite-back-ajithkumar9242.vercel.app" });

export const getTimelinePost = (id) => API.get(`/post/${id}/timeline`)

export const likePost = (id, userId) => API.put(`/post/${id}/like`, {userId: userId})
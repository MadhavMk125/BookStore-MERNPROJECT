import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000/api"
});

// Attach JWT token automatically
API.interceptors.request.use((req) => {

    const token = localStorage.getItem("token");

    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

// USER
export const registerUser = (data) =>
    API.post("/users/register", data);

export const loginUser = (data) =>
    API.post("/users/login", data);

export const getProfile = () =>
    API.get("/users/profile");

//BOOK
export const getBooks = () =>
    API.get("/books");

export const getBook = (id) =>
    API.get(`/books/${id}`);

//ORDER

export const placeOrder = (data) =>
    API.post("/orders/place", data);

export const myOrders = () =>
    API.get("/orders/myorders");

// REVIEW

export const addReview = (data) =>
    API.post("/reviews/add", data);

export default API;
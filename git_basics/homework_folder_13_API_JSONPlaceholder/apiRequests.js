const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

axios.interceptors.request.use(request => {
    console.log('Starting Request:', request.method.toUpperCase(), request.url);
    return request;
}, error => {
    console.error('Request Error:', error.message);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log('Response Received:', response.status, response.data);
    return response;
}, error => {
    console.error('Response Error:', error.message);
    return Promise.reject(error);
});

const executeRequests = async () => {
    try {
        const getPostResponse = await axios.get(`${BASE_URL}/posts/1`);

        const getUserResponse = await axios.get(`${BASE_URL}/users/1`);

        const newPost = {
            title: 'New Post',
            body: 'This is a test post',
            userId: 1,
        };
        const postResponse = await axios.post(`${BASE_URL}/posts`, newPost);

        const newComment = {
            postId: 1,
            name: 'Test Comment',
            email: 'test@example.com',
            body: 'This is a test comment',
        };
        const commentResponse = await axios.post(`${BASE_URL}/comments`, newComment);

        const getTodoResponse = await axios.get(`${BASE_URL}/todos/1`);

    } catch (error) {
        console.error('Error occurred:', error.message);
    }
};

module.exports = executeRequests;

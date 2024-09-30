const axios = require('axios');
const executeRequests = require('./apiRequests');

jest.mock('axios');

describe('API Requests', () => {
    it('should execute GET and POST requests successfully', async () => {
        axios.get.mockResolvedValueOnce({ status: 200, data: { id: 1 } });
        axios.post.mockResolvedValueOnce({ status: 201, data: { id: 101 } });

        await executeRequests();

        expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/1');
        expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1');
        expect(axios.post).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts', {
            title: 'New Post',
            body: 'This is a test post',
            userId: 1,
        });
    });
});

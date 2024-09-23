const axios = require('axios');
const fetchData = require('./fetchData');


jest.mock('axios');

describe('fetchData', () => {
    it('should return data when request is successful', async () => {
        const mockData = { id: 1, name: 'Test Item' };


        axios.get.mockResolvedValue({ data: mockData });

        const result = await fetchData('https://example.com/api');


        expect(result).toEqual(mockData);
    });

    it('should throw an error when request fails', async () => {

        axios.get.mockRejectedValue(new Error('Network Error'));


        await expect(fetchData('https://example.com/api')).rejects.toThrow('Failed to fetch data');
    });
});
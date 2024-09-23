const fetchDataWithHeadersAndParams = require('./requestWithHeadersAndParams');
const axios = require('axios');


jest.mock('axios');

describe('fetchDataWithHeadersAndParams', () => {
    it('should include custom headers and URL params in the request', async () => {
        const mockUrl = 'https://example.com/api';
        const mockParams = { search: 'test', limit: 10 };
        const mockHeaders = { 'Authorization': 'Bearer token123', 'Custom-Header': 'HeaderValue' };

        axios.get.mockResolvedValue({ data: { success: true } });

        await fetchDataWithHeadersAndParams(mockUrl, mockParams, mockHeaders);


        expect(axios.get).toHaveBeenCalledWith(mockUrl, {
            params: mockParams,
            headers: mockHeaders
        });
    });

    it('should throw an error when request fails', async () => {
        const mockUrl = 'https://example.com/api';
        const mockParams = { search: 'test', limit: 10 };
        const mockHeaders = { 'Authorization': 'Bearer token123', 'Custom-Header': 'HeaderValue' };

        axios.get.mockRejectedValue(new Error('Network Error'));

        await expect(fetchDataWithHeadersAndParams(mockUrl, mockParams, mockHeaders)).rejects.toThrow('Request failed');
    });
});
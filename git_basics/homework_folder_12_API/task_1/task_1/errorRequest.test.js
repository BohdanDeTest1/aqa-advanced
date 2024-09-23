const fetchDataWithError = require('./errorRequest');
const axios = require('axios');


jest.mock('axios');

test('should return error message when request fails', async () => {

    axios.get.mockRejectedValue(new Error('Network Error'));

    const result = await fetchDataWithError();


    expect(result).toBe('Error: Unable to fetch data');
});

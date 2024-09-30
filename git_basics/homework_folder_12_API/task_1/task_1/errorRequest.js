const axios = require('axios');

const fetchDataWithError = async () => {
    try {
        const response = await axios.get('https://nonexistent-url.com');
        return response.data;
    } catch (error) {
        return 'Error: Unable to fetch data';
    }
};

module.exports = fetchDataWithError;
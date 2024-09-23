const axios = require('axios');

const fetchDataWithHeadersAndParams = async (url, params, headers) => {
    try {
        const response = await axios.get(url, {
            params: params,
            headers: headers
        });
        return response.data;
    } catch (error) {
        throw new Error('Request failed');
    }
};

module.exports = fetchDataWithHeadersAndParams;
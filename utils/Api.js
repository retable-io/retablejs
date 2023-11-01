const axios = require('axios');

const API_BASE_URL = 'https://api.retable.io/v1/public';

class API {
    constructor(apiKey) {
        this.axios = axios.create({
            baseURL: API_BASE_URL,
            timeout: 10000,
            headers: { 'ApiKey': apiKey },
        });
    }

    async workspaces() {
        let url = `${API_BASE_URL}/workspace`;

        return this.axios
            .get(url)
            .then((response) => response.data)
            .catch((err) => {
                console.log(err);
                throw new Error(err.response.data.message);
            });
    }

    // Additional functions for other API endpoints go here
}

module.exports = API;
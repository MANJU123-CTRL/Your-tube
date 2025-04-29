
        const axios = require('axios');

        module.exports = async (ip) => {
          const response = await axios.get(`http://ip-api.com/json/${ip}`);
          return response.data;
        };
    
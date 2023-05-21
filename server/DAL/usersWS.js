const axios = require("axios");

const getUsersFromWS = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
}

module.exports = { getUsersFromWS };
const axios = require("axios");

const getMoviesFromWS = () =>{
    return axios.get("https://api.tvmaze.com/shows");
}

module.exports = {getMoviesFromWS};
const moviesFromWS = require("../DAL/moviesWS");

const getMovies = async (req, res, next) => {

    try {
        const resp = await moviesFromWS.getMoviesFromWS();
        res.json(resp.data);
    }
    catch (error) {
        next(error);
    }
}

module.exports = { getMovies };
const express = require("express");
const app = express();

const usersRoutes = require("./usersRoutes");
const moviesRoutes = require("./moviesRoutes");

app.use("/users", usersRoutes);
app.use("/movies", moviesRoutes);

module.exports = app;


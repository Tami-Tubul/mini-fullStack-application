const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const { loadUsersOnMongo } = require("./controllers/usersControllers");

app.use(express.json());

app.get("/", async (req, res, next) => {
    res.json({ message: "API Running..." })
})

app.use("/api", apiRoutes);

app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

require("./config/database");

loadUsersOnMongo();

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server run in port ${PORT}`);
})
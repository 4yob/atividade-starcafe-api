const express = require("express");
const cors = require("cors");
const movieRoutes = require("./src/routes/movieRoutes.js");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use ("/api", movieRoutes);

app.get("/", (req, res) => {
    res.send("Y daleeeeeee !!");
});

app.listen(PORT, () => {
    console.log(`Server rodando em http://localhost:${PORT}`);
})
const express = require("express");
const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);

const { PORT } = require("./config");
const db = require("./config");

//ROUTE
app.get("/", (req, res) => {
    res.send("Welcome to sequelize & express demo");
});

// memanggil api
router.get("/", async (req, res) => {
    const obj = await fetchData();
    res.render("./views/pages/home", { obj });
});

function fetchData() {
    return fetch("http://localhost:5000/api/movies").then((res) => res.json());
}

app.use("/api/movies", require("./routes/movies"));

if (db) {
    app.listen(PORT, (req, res) => {
        console.log(`Server runs on port ${PORT}`);
    });
}

const express = require("express");
const app = express();
// const ejs = require("ejs");

// membaca file ejs
// app.set("view engine", "ejs");

// membaca file statis
// app.use(express.static("views"));

app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);

const { PORT } = require("./config");
const db = require("./config");
const router = require("./routes/movies");

// //ROUTE
// app.get("/", (req, res) => {
//     res.send("Welcome to sequelize & express demo");
// });
// app.get("/", (req, res) => {
//     res.render("pages/home");
// });
// // // memanggil api
// app.get("/", async (req, res) => {
//     const obj = await fetchData();

//     res.render("pages/home", { obj });
// });

// function fetchData() {
//     return fetch("http://localhost:5000/api/movies").then((res) => res.json());
// }

app.use("/", require("./routes/movies"));

if (db) {
    app.listen(PORT, (req, res) => {
        console.log(`Server runs on port ${PORT}`);
    });
}

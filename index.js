const express = require("express");
const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);

const {
    PORT
} = require('./config');
const db = require('./config')

//ROUTE
app.get("/", (req, res) => {
    res.send("Welcome to sequelize & express demo");
});

app.use('/api/movies', require('./routes/movies'))

if (db) {
    app.listen(PORT, (req, res) => {
        console.log(`Server runs on port ${PORT}`);
    });
}
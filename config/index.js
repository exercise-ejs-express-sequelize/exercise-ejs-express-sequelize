const db = require('./database')

const {
    PORT,
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE
} = require('./environment')

module.exports = {
    db,
    PORT,
    MYSQL_DATABASE,
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASSWORD
}
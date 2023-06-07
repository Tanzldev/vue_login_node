let mysql = require('mysql')

let db = mysql.createPool({
    host:'127.0.0.1',
    user:'tzl',
    password:'123456',
    database:'vip'
})

module.exports = db
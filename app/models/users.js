const moment = require('moment');
const { createTimeFormat } = require('../constants');
const db = require('../utils/db');

module.exports = db.defineModel('users', {
    username: db.STRING,
    password: db.STRING,
    last_login_time: db.STRING,
    create_time: {
        type: db.STRING,
        allowNull: false,
        defaultValue: moment().format(createTimeFormat),
    }
});
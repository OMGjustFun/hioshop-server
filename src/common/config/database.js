const mysql = require('think-model-mysql');

module.exports = {
    handle: mysql,
    database: 'hiolabsDB',
    prefix: 'hiolabs_',
    encoding: 'utf8mb4',
    host: '42.192.210.104',
    port: '3306',
    user: 'hiolabsDB',
    password: 'hiolabsDB888',
    dateStrings: true
};

"use strict";
var _a, _b, _c, _d;
const config = {
    username: (_a = process.env.DB_USER) !== null && _a !== void 0 ? _a : 'root',
    password: (_b = process.env.DB_PASS) !== null && _b !== void 0 ? _b : '123456',
    database: 'FINANCIAL_CONTROLLER',
    host: (_c = process.env.DB_HOST) !== null && _c !== void 0 ? _c : 'localhost',
    port: (_d = Number(process.env.DB_PORT)) !== null && _d !== void 0 ? _d : 3306,
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Z'
    },
    logging: false
};
module.exports = config;
//# sourceMappingURL=database.js.map
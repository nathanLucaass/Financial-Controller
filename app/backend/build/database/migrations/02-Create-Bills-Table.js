"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('bills', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            date: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE,
            },
            description: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
            },
            value: {
                allowNull: false,
                type: sequelize_1.DataTypes.FLOAT,
            }
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('bills');
    },
};
//# sourceMappingURL=02-Create-Bills-Table.js.map
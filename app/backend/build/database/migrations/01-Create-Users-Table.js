"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    async up(queryInterface) {
        await queryInterface.createTable('users', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            username: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING
            },
            email: {
                allowNull: false,
                unique: true,
                type: sequelize_1.DataTypes.STRING
            },
            password: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING
            }
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable('users');
    }
};
//# sourceMappingURL=01-Create-Users-Table.js.map
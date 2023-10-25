"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    async up(queryInterface) {
        await queryInterface.createTable('bills', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            description: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING
            },
            value: {
                allowNull: false,
                type: sequelize_1.DataTypes.FLOAT
            },
            user_id: {
                allowNull: false,
                type: sequelize_1.DataTypes.INTEGER,
                references: {
                    model: 'users',
                    key: 'id'
                }
            }
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable('bills');
    }
};
//# sourceMappingURL=02-Create-Bills-Table.js.map
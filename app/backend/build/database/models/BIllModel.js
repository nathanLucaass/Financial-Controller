"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Bill extends sequelize_1.Model {
}
exports.default = Bill;
Bill.init({
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
}, {
    sequelize: _1.default,
    tableName: 'bills'
});
//# sourceMappingURL=BIllModel.js.map
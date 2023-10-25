"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class User extends sequelize_1.Model {
}
exports.default = User;
User.init({
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
}, {
    sequelize: _1.default,
    tableName: 'users',
    timestamps: false
});
//# sourceMappingURL=UserModel.js.map
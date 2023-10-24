"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = require("../database/models/UserModel");
class NewUserValidator {
    async validate(req, res, next) {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
        }
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email address' });
        }
        const user = await UserModel_1.default.findOne({ where: { email } });
        if (user) {
            return res.status(409).json({ message: 'User already exists' });
        }
        next();
    }
}
exports.default = new NewUserValidator().validate;
//# sourceMappingURL=newUserValidator.js.map
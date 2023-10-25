"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
const UserModel_1 = require("../database/models/UserModel");
const token_1 = require("../token");
class UserService {
    constructor(tokenManager = new token_1.TokenManager()) {
        this.tokenManager = tokenManager;
    }
    async createUser(username, email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await UserModel_1.default.create({
            username,
            email,
            password: hashedPassword
        });
        return { status: 'success', data: user };
    }
    ;
    async login(email, password) {
        const user = await UserModel_1.default.findOne({ where: { email } });
        if (user == null) {
            return { status: 'error', data: { message: 'User not found' } };
        }
        if (!bcrypt.compareSync(password, user.password)) {
            return { status: 'error', data: { message: 'Invalid password' } };
        }
        const token = this.tokenManager.generateToken(email);
        return { status: 'success', data: { userId: user === null || user === void 0 ? void 0 : user.dataValues.id, token } };
    }
    ;
}
exports.default = UserService;
;
//# sourceMappingURL=userService.js.map
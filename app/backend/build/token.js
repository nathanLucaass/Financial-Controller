"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenManager = void 0;
const jwt = require("jsonwebtoken");
class TokenManager {
    constructor(secret = process.env.JWT_SECRET || 'jwt_secret') {
        this.secret = secret;
    }
    generateToken(username) {
        const jwtPayload = {
            sub: username,
        };
        const token = jwt.sign(jwtPayload, this.secret, {
            algorithm: 'HS256',
            expiresIn: '7d',
        });
        return { token };
    }
}
exports.TokenManager = TokenManager;
//# sourceMappingURL=token.js.map
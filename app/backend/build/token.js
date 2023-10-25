"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenManager = void 0;
const jwt = require("jsonwebtoken");
class TokenManager {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    constructor(secret) {
        var _a;
        if (secret === void 0) { secret = (_a = process.env.JWT_SECRET) !== null && _a !== void 0 ? _a : 'jwt_secret'; }
        this.secret = secret;
    }
    generateToken(username) {
        const jwtPayload = {
            sub: username
        };
        const token = jwt.sign(jwtPayload, this.secret, {
            algorithm: 'HS256',
            expiresIn: '7d'
        });
        return { token };
    }
}
exports.TokenManager = TokenManager;
//# sourceMappingURL=token.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = require("../service/userService");
class UserController {
    constructor(userService = new userService_1.default()) {
        this.userService = userService;
    }
    async createUser(req, res) {
        const { username, email, password } = req.body;
        const response = await this.userService.createUser(username, email, password);
        return res.status(201).json(response.data);
    }
    async login(req, res) {
        const { email, password } = req.body;
        const response = await this.userService.login(email, password);
        if (response.status === 'error') {
            return res.status(400).json(response.data);
        }
        ;
        return res.status(200).json(response.data);
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map
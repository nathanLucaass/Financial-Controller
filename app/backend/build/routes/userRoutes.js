"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controller/UserController");
const newUserValidator_1 = require("../middlewares/newUserValidator");
const userController = new UserController_1.default();
const router = (0, express_1.Router)();
router.post('/new', newUserValidator_1.default, (req, res) => userController.createUser(req, res));
router.post('/login', (req, res) => userController.login(req, res));
exports.default = router;
//# sourceMappingURL=userRoutes.js.map
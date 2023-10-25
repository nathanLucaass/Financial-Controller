"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = require("express");
const UserController_1 = require("../controller/UserController");
const newUserValidator_1 = require("../middlewares/newUserValidator");
const userController = new UserController_1.default();
const router = (0, express_1.Router)();
router.post('/new', newUserValidator_1.default, async (req, res) => await userController.createUser(req, res));
router.post('/login', async (req, res) => await userController.login(req, res));
exports.default = router;
//# sourceMappingURL=userRoutes.js.map
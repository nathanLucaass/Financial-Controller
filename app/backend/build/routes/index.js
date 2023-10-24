"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes_1 = require("./userRoutes");
const billRoutes_1 = require("./billRoutes");
const earningRoutes_1 = require("./earningRoutes");
const router = (0, express_1.Router)();
router.use('/user', userRoutes_1.default);
router.use('/bill', billRoutes_1.default);
router.use('/earning', earningRoutes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map
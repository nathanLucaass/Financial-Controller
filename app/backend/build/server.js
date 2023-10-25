"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
const app_1 = require("./app");
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3001;
new app_1.default().start(PORT);
//# sourceMappingURL=server.js.map
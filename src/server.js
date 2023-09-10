"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const productsRouters_1 = __importDefault(require("./routes/productsRouters"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('tiny'));
app.use(express_1.default.json());
app.use('/products', productsRouters_1.default);
const port = 3000;
app.listen(port, () => console.log(`server is run in port: ${port}`));

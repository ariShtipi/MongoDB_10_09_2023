"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productsController_1 = __importDefault(require("../controllers/productsController"));
const productsRouter = express_1.default.Router();
productsRouter.get("/allProducts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield productsController_1.default.getProducts(req, res);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}));
productsRouter.get("/products/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield productsController_1.default.getProductsById(req, res);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}));
productsRouter.post("/addProducts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield productsController_1.default.addProducts(req, res);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}));
productsRouter.put("/updateProducts/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield productsController_1.default.updateProducts(req, res);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}));
productsRouter.put("/quantityAdd1/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield productsController_1.default.quantityAdd1(req, res);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}));
productsRouter.put("/quantityMinus1/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield productsController_1.default.quantityMinus1(req, res);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}));
productsRouter.delete("/deleteProduct/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield productsController_1.default.deleteProductById(req, res);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}));
exports.default = productsRouter;

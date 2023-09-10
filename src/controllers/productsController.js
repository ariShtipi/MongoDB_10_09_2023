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
const productsService_1 = __importDefault(require("../services/productsService"));
const getProducts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productsService_1.default.getProducts();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
const getProductsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idParams = req.params.id;
        const productsById = yield productsService_1.default.getProductsById(idParams);
        if (productsById) {
            res.send(productsById);
        }
        else {
            console.log(idParams);
            res.status(404).json({ error: "Product not found" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
const addProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, title, description, price, category, image, quantity, rating: { rate, count }, } = req.body;
        const newProduct = {
            id,
            title,
            description,
            price,
            category,
            image,
            quantity,
            rating: { rate, count },
        };
        const addedProduct = yield productsService_1.default.addProducts(newProduct);
        if (addedProduct) {
            res.send(addedProduct);
        }
        else {
            res.status(404).send({ error: "Product with this id already exists" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
const updateProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idParams = req.params.id;
        const { id, title, description, price, category, image, quantity, rating: { rate, count }, } = req.body;
        const newProduct = {
            id,
            title,
            description,
            price,
            category,
            image,
            quantity,
            rating: { rate, count },
        };
        const updateProduct = yield productsService_1.default.updateProducts(idParams, newProduct);
        if (updateProduct) {
            res.send(updateProduct);
        }
        else {
            res.status(404).send({ error: " id Product is not found" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idParams = req.params.id;
        const productsById = yield productsService_1.default.deleteProductById(idParams);
        if (productsById) {
            res.send(productsById);
        }
        else {
            res.status(404).send({ error: "id Product is not found" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
const quantityAdd1 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idParams = req.params.id;
        const quantityAdd1 = yield productsService_1.default.quantityAdd1(idParams);
        if (quantityAdd1) {
            res.send(quantityAdd1);
        }
        else {
            res.status(404).send({ error: "id Product is not found" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
const quantityMinus1 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idParams = req.params.id;
        const quantityAdd1 = yield productsService_1.default.quantityMinus1(idParams);
        if (quantityAdd1) {
            res.send(quantityAdd1);
        }
        else {
            res.status(404).send({ error: "id Product is not found" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.default = {
    getProducts,
    getProductsById,
    addProducts,
    updateProducts,
    deleteProductById,
    quantityAdd1,
    quantityMinus1,
};

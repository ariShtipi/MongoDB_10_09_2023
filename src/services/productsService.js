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
const productsDal_1 = __importDefault(require("../dals/productsDal"));
const getProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productsDal_1.default.getProducts();
        return products;
    }
    catch (error) {
        throw new Error("Internal server error");
    }
});
const getProductsById = (idParams) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield productsDal_1.default.getProductsById(idParams);
        return product;
    }
    catch (error) {
        throw new Error("Internal server error");
    }
});
const addProducts = (newProduct) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addedProduct = yield productsDal_1.default.addProducts(newProduct);
        return addedProduct;
    }
    catch (error) {
        throw new Error("Internal server error");
    }
});
const updateProducts = (idParams, newProduct) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProduct = yield productsDal_1.default.updateProducts(idParams, newProduct);
        return updatedProduct;
    }
    catch (error) {
        throw new Error("Internal server error");
    }
});
const deleteProductById = (idParams) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedProduct = yield productsDal_1.default.deleteProductById(idParams);
        return deletedProduct;
    }
    catch (error) {
        throw new Error("Internal server error");
    }
});
const quantityAdd1 = (idParams) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProduct = yield productsDal_1.default.quantityAdd1(idParams);
        return updatedProduct;
    }
    catch (error) {
        throw new Error("Internal server error");
    }
});
const quantityMinus1 = (idParams) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProduct = yield productsDal_1.default.quantityMinus1(idParams);
        return updatedProduct;
    }
    catch (error) {
        throw new Error("Internal server error");
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

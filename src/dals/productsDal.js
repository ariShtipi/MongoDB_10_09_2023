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
const data_1 = __importDefault(require("./data"));
let data = [];
function getProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield (0, data_1.default)();
            let result = yield data.find({}).toArray();
            return result;
        }
        catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    });
}
const getProductsById = (idParams) => {
    const product = data.find((product) => product.id === idParams);
    if (product) {
        console.log(product);
        return product;
    }
    else {
        console.log("Product not found");
        return null;
    }
};
const addProducts = (newProduct) => {
    const existingProduct = data.find((product) => product.id === newProduct.id);
    if (existingProduct) {
        return null;
    }
    else {
        data.push(newProduct);
        return newProduct;
    }
};
const updateProducts = (idParams, newProduct) => {
    const productIndex = data.findIndex((product) => product.id === idParams);
    if (productIndex !== -1) {
        const updateProduct = data[productIndex];
        if (newProduct.id) {
            updateProduct.id = newProduct.id;
        }
        if (newProduct.title) {
            updateProduct.title = newProduct.title;
        }
        return updateProduct;
    }
    else {
        return null;
    }
};
const deleteProductById = (idParams) => {
    const productIndex = data.findIndex((product) => product.id === idParams);
    if (productIndex !== -1) {
        data.splice(productIndex, 1);
        return true;
    }
    else {
        return false;
    }
};
const quantityAdd1 = (idParams) => {
    const product = data.find((product) => product.id === idParams);
    if (product) {
        product.quantity++;
        return product;
    }
    else {
        return null;
    }
};
const quantityMinus1 = (idParams) => {
    const product = data.find((product) => product.id === idParams);
    if (product) {
        if (product.quantity > 0) {
            product.quantity--;
        }
        return product;
    }
    else {
        return null;
    }
};
exports.default = {
    getProducts,
    getProductsById,
    addProducts,
    updateProducts,
    deleteProductById,
    quantityAdd1,
    quantityMinus1,
};

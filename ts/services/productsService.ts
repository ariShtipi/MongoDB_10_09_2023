import productsDal from "../dals/productsDal";
import { dbItemObject } from "../dals/productsDal";

const getProducts = async () => {
  try {
    const products = await productsDal.getProducts();
    return products;
  } catch (error) {
    throw new Error("Internal server error");
  }
};

const getProductsById = async (idParams: string) => {
  try {
    const product = await productsDal.getProductsById(idParams);
    return product;
  } catch (error) {
    throw new Error("Internal server error");
  }
};

const addProducts = async (newProduct: dbItemObject) => {
  try {
    const addedProduct = await productsDal.addProducts(newProduct);
    return addedProduct;
  } catch (error) {
    throw new Error("Internal server error");
  }
};

const updateProducts = async (idParams: string, newProduct: dbItemObject) => {
  try {
    const updatedProduct = await productsDal.updateProducts(
      idParams,
      newProduct
    );
    return updatedProduct;
  } catch (error) {
    throw new Error("Internal server error");
  }
};

const deleteProductById = async (idParams: string) => {
  try {
    const deletedProduct = await productsDal.deleteProductById(idParams);
    return deletedProduct;
  } catch (error) {
    throw new Error("Internal server error");
  }
};

const quantityAdd1 = async (idParams: string) => {
  try {
    const updatedProduct = await productsDal.quantityAdd1(idParams);
    return updatedProduct;
  } catch (error) {
    throw new Error("Internal server error");
  }
};

const quantityMinus1 = async (idParams: string) => {
  try {
    const updatedProduct = await productsDal.quantityMinus1(idParams);
    return updatedProduct;
  } catch (error) {
    throw new Error("Internal server error");
  }
};

export default {
  getProducts,
  getProductsById,
  addProducts,
  updateProducts,
  deleteProductById,
  quantityAdd1,
  quantityMinus1,
};

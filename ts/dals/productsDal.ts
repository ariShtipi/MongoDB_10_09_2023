import main from "./data";

export type dbItemObject = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
  quantity: number;
};
let data: dbItemObject[] = [];

async function getProducts() {
  try {
    let data = await main();
    let result = await data.find({}).toArray();
    return result;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

const getProductsById = (idParams: string) => {
  const product = data.find((product) => product.id === idParams);
  if (product) {
    console.log(product);
    return product;
  } else {
    console.log("Product not found");
    return null;
  }
};

const addProducts = (newProduct: dbItemObject) => {
  const existingProduct = data.find((product) => product.id === newProduct.id);
  if (existingProduct) {
    return null;
  } else {
    data.push(newProduct);
    return newProduct;
  }
};

const updateProducts = (idParams: string, newProduct: dbItemObject) => {
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
  } else {
    return null;
  }
};

const deleteProductById = (idParams: string) => {
  const productIndex = data.findIndex((product) => product.id === idParams);
  if (productIndex !== -1) {
    data.splice(productIndex, 1);
    return true;
  } else {
    return false;
  }
};

const quantityAdd1 = (idParams: string) => {
  const product = data.find((product) => product.id === idParams);
  if (product) {
    product.quantity++;
    return product;
  } else {
    return null;
  }
};

const quantityMinus1 = (idParams: string) => {
  const product = data.find((product) => product.id === idParams);
  if (product) {
    if (product.quantity > 0) {
      product.quantity--;
    }
    return product;
  } else {
    return null;
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

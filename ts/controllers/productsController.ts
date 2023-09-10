import { Request, Response } from "express";
import productsService from "../services/productsService";

const getProducts = async (_req: Request, res: Response) => {
  try {
    const products = await productsService.getProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getProductsById = async (req: Request, res: Response) => {
  try {
    const idParams = req.params.id;
    const productsById = await productsService.getProductsById(idParams);

    if (productsById) {
      res.send(productsById);
    } else {
      console.log(idParams);
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const addProducts = async (req: Request, res: Response) => {
  try {
    const {
      id,
      title,
      description,
      price,
      category,
      image,
      quantity,
      rating: { rate, count },
    } = req.body;
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
    const addedProduct = await productsService.addProducts(newProduct);
    if (addedProduct) {
      res.send(addedProduct);
    } else {
      res.status(404).send({ error: "Product with this id already exists" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateProducts = async (req: Request, res: Response) => {
  try {
    const idParams = req.params.id;
    const {
      id,
      title,
      description,
      price,
      category,
      image,
      quantity,
      rating: { rate, count },
    } = req.body;

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

    const updateProduct = await productsService.updateProducts(
      idParams,
      newProduct
    );
    if (updateProduct) {
      res.send(updateProduct);
    } else {
      res.status(404).send({ error: " id Product is not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteProductById = async (req: Request, res: Response) => {
  try {
    const idParams = req.params.id;
    const productsById = await productsService.deleteProductById(idParams);
    if (productsById) {
      res.send(productsById);
    } else {
      res.status(404).send({ error: "id Product is not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const quantityAdd1 = async (req: Request, res: Response) => {
  try {
    const idParams = req.params.id;
    const quantityAdd1 = await productsService.quantityAdd1(idParams);
    if (quantityAdd1) {
      res.send(quantityAdd1);
    } else {
      res.status(404).send({ error: "id Product is not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const quantityMinus1 = async (req: Request, res: Response) => {
  try {
    const idParams = req.params.id;
    const quantityAdd1 = await productsService.quantityMinus1(idParams);
    if (quantityAdd1) {
      res.send(quantityAdd1);
    } else {
      res.status(404).send({ error: "id Product is not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
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

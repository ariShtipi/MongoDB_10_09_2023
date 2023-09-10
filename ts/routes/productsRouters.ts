import express from "express";
import productsController from "../controllers/productsController";

const productsRouter = express.Router();

productsRouter.get("/allProducts", async (req, res) => {
  try {
    await productsController.getProducts(req, res);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

productsRouter.get("/products/:id", async (req, res) => {
  try {
    await productsController.getProductsById(req, res);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

productsRouter.post("/addProducts", async (req, res) => {
  try {
    await productsController.addProducts(req, res);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

productsRouter.put("/updateProducts/:id", async (req, res) => {
  try {
    await productsController.updateProducts(req, res);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

productsRouter.put("/quantityAdd1/:id", async (req, res) => {
  try {
    await productsController.quantityAdd1(req, res);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

productsRouter.put("/quantityMinus1/:id", async (req, res) => {
  try {
    await productsController.quantityMinus1(req, res);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

productsRouter.delete("/deleteProduct/:id", async (req, res) => {
  try {
    await productsController.deleteProductById(req, res);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default productsRouter;

import express from "express";
import Product from "../database/models/product.model.js";

const productController = express.Router();

/**
 * GET/
 * retrieve and display all products in the product model
 */
productController.get('/products', (req, res) => {
  Product
    .find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send('unable to fetch products\n'+ err);
    });
});
/**
 * POST/
 * Add a new product to your database
 */
productController.post('/add-product', (req, res) => {
  const { name, price, popularItem } = req.body;
  const productData = {
    name,
    price,
    popularItem,
  };
  const newProduct = new Product(productData);
  newProduct
    .save()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send('unable to save product to database\n'+ err);
    });
});
  
export default productController;
  
import express from "express";
import Product from "../database/models/product.model.js";

const productController = express.Router();

/**
 * GET/
 * retrieve and display all products in the product model
 */
productController.get('/products', (req, res) => {
  let filter = {}
  let sort = {}
  if(req.query.filter !== "nofilter") {
    filter = JSON.parse(req.query.filter)
  }
  if(req.query.sort !== "nosort") {
    sort = JSON.parse(req.query.sort);
  }
  Product
    .find(filter).sort(sort).limit(req.query.numItems)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send('unable to fetch products\n'+ err);
    });
});

/**
 * GET/
 * retrieve and display a single product
 */
productController.get('/product', (req, res) => {
  Product
    .findOne({_id: req.query.productId})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send('unable to fetch product\n'+ err);
    });
});

/**
 * POST/
 * Add a new product to your database
 */
productController.post('/add-product', (req, res) => {
  const newProduct = new Product(req.body);
  newProduct
    .save()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send('unable to save product to database\n'+ err);
    });
});

/**
 * POST/
 * Update product in the db
 */
productController.post('/update-product', (req, res) => {
  const { id, name, price, discountPrice, popularItem, rating, numRatings, imageUrl } = req.body;
  Product.updateOne({_id: id}, {$set:
      {"name": name,
        "price": price,
        "discountPrice": discountPrice,
        "popularItem": popularItem,
        "rating": rating,
        "numRatings": numRatings,
        "imageUrl": imageUrl}})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send('unable to update product information\n'+ err);
    });
});

/**
 * POST/
 * Update single field in product
 */
productController.post('/update-product-field', (req, res) => {
  const { id, fieldName, value } = req.body;
  Product.updateOne({_id: id}, {$set: {[fieldName]: value}}, {upsert: false})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send('unable to update product information\n'+ err);
    });
});

/**
 * POST/
 * Update or add field to all products
 */
productController.post('/update-products', (req, res) => {
  const { fieldName, defaultValue } = req.body;
  Product.updateMany({}, {$set: {[fieldName]: defaultValue}})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send('unable to update product information\n'+ err);
    });
});

export default productController;
  
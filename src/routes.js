const express  = require('express');
const mongoose = require('mongoose');
const ProductController = require('./controllers/ProductController');

const routes = express.Router();


routes.get("/products", ProductController.index );
routes.post("/products", ProductController.store );
routes.get("/products/:id", ProductController.show);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);


module.exports = routes;
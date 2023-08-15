const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  fabric: String,
  description: String,
  image: String,
  price: Number,
  qty: Number,
  size: String,
  isReadyToShip: Boolean,
},
{ timestamps: true }
);

const Product = new mongoose.model("Product", productSchema);

module.exports = Product;
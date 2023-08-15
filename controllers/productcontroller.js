const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/", async (req, res) => {
  let products = await Product.find()
    res.render("product/index.ejs",{ products });
});

//seeding products
// router.get("/seed", async (req, res) => {
//   let seededproducts = await Product.create([
//     {
//       name: "Mens Jeans",
//       fabric: "Denim",
//       description:
//         "low rise,faded,skinny,five-pockets, cropped,straight Tapered",
//       image:
//         "https://rukminim2.flixcart.com/image/550/650/xif0q/jean/u/n/r/32-pjdnpskb743232-peter-england-original-imagrnzejzrcc8aq.jpeg?q=90&crop=false",
//       price: 45,
//       qty: 10,
//       size: "large",
//       isReadyToShip: true,
//     },
//     {
//       name: "Kids Jean",
//       fabric: "canvas",
//       description:
//         "low rise,faded,skinny,five-pockets, cropped,straight Tapered",
//       image:
//         "https://img.freepik.com/free-photo/portrait-cute-little-boy-stylish-jeans-clothes-looking-camera-studio_155003-15898.jpg",
//       price: 25,
//       qty: 10,
//       size: "s/m/l/xl",
//       isReadyToShip: true,
//     },
//     {
//       name: "Mens-Shirt",
//       fabric: "tusser",
//       description:
//         "florel print,faded,buttoned,chest-pocket, cropped,bone-collared,button down",
//       image:
//         "https://www.amedeoexclusive.com/cdn/shop/products/AEBD8198.jpg?v=1598429561",
//       price: 13,
//       qty: 50,
//       size: "s/m/l/xl",
//       isReadyToShip: true,
//     },
//     {
//       name: "Women Jean",
//       fabric: "Denim",
//       description:
//         "low rise,faded,skinny,five-pockets, cropped,straight Tapered",
//       image:
//         "https://media.istockphoto.com/id/910166128/photo/woman-in-denim-pants-and-shoes-standing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=q_P2lEmuQhyPWpFLZYmqTq8xRZQkmxaTAybmeuu1n28=",
//       price: 24,
//       qty: 50,
//       size: "s/m/l/xl",
//       isReadyToShip: true,
//     },
//     {
//       name: "Women Top",
//       fabric: "shiffon",
//       description: "slim fit partywear",
//       image:
//         "https://i5.walmartimages.com/asr/98b64b8d-d697-4521-ae73-3d37851811d5.e2174a561e61d1a8a615abd28c924654.jpeg",
//       price: 16,
//       qty: 10,
//       size: "s/m/l/xl",
//       isReadyToShip: true,
//     },
//     {
//       name: "Mens Waist Belt",
//       fabric: "Leather",
//       description: "All over riveted , brass buckle,adjustable size",
//       image:
//         "https://i.pinimg.com/736x/b8/f3/3d/b8f33d01f1aa8f0fc2316e4f870a3f56.jpg",
//       price: 9,
//       qty: 15,
//       size: "adjustable",
//       isReadyToShip: true,
//     },
//   ]);
//   res.send(seededproducts)
// });

module.exports = router;

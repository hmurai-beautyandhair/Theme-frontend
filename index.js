const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 3001;
require("dotenv").config();
const Shopify = require('shopify-api-node');
const shopify2 = new Shopify({
  shopName:  'wigs-store',
  apiKey: 'def0b879df143c2b3575391121b3272a',
  password: 'fec6c84d5f2364000732aea5236ab11d',
  autoLimit: true,
bucketSize: { calls: 5, interval: 1000, bucketSize:  35}, 
});
const shopify1 = new Shopify({
  shopName:  'wigscom',
  apiKey: 'dc84bc74af0be2b7757756c4fea170f7',
  password: '046fd5d3c21a33d038aeebb050e3d500',
  autoLimit: true,
bucketSize: { calls: 5, interval: 1000, bucketSize:  35}, 
});

app.use(express.static("public"));

const path = __dirname + "/views/";



app.get("/", function(req, res) {
  res.sendFile(path + "index.html");
});

app.post("/wigscom", function(req, res) {
  shopify.theme
  .create({
    "name": "New-theme",
    "src": "http://themes.shopify.com/theme.zip",
    "role": "main"
  })
  .then(
    (theme) => console.log(theme),
    (err) => console.error(err)
  );
});
app.post("/wigoutlet", function(req, res) {
  shopify.theme
  .create({
    "name": "New-theme",
    "src": "http://themes.shopify.com/theme.zip",
    "role": "main"
  })
  .then(
    (theme) => console.log(theme),
    (err) => console.error(err)
  );
});
// app.get("/api/reviews", function(req, res) {
//   Survey.find()
//     .then(survey => res.json(survey))
//     .catch(err => res.status(400).json("Error" + err));
//     return res.send(customers);
// });

app.use("/", router);

app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}`);
});
// https://apppppk.herokuapp.com/

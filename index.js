const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const date = new Date();
const options = { month: "short", day: "numeric", year:"numeric" };
const date2 = date.toLocaleDateString("en-US", options);
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 3001;
require("dotenv").config();
const Shopify = require('shopify-api-node');
const shopify1 = new Shopify({
  shopName:  'wigs-store',
  apiKey: 'def0b879df143c2b3575391121b3272a',
  password: 'fec6c84d5f2364000732aea5236ab11d',
  autoLimit: true,
bucketSize: { calls: 5, interval: 1000, bucketSize:  35}, 
});
const shopify2 = new Shopify({
  shopName:  'wigoutlet-dev',
  apiKey: '09736710af7ed17936fbe36d8019533e',
  password: '7df44b95cad6f656a54eb4769355512b',
  autoLimit: true,
bucketSize: { calls: 5, interval: 1000, bucketSize:  35}, 
});

app.use(express.static("public"));

const path = __dirname + "/views/";



app.get("/", function(req, res) {
  res.sendFile(path + "index.html");
});

  // shopify1.theme
  // .create({
  //   "name": "custommmm",
  //   "src": "http://scripts.wigs.com/shopify/theme-backups/wigs.com/Current/files.zip",
  //   // "role": "main"
  // })
  // .then(
  //   (theme) => console.log(theme),
  //   (err) => console.error(err)
  // );

app.post("/wigscom", function(req, res) {
  shopify1.theme
  .create({
    "name": `New-theme ${date2}`,
    "src": "http://scripts.wigs.com/shopify/theme-backups/wigs.com/Current/files.zip",
    // "role": "main"
  })
  .then(
    (theme) =>{
       res.json(theme)
       console.log(theme)
      },
    (err) => console.error(err)
  );
});
app.post("/wigoutlet", function(req, res) {
  shopify2.theme
  .create({
    "name": `New-theme ${date2}`,
    "src": "https://scripts.wigs.com/shopify/theme-backups/wigoutlet.com/Current/files.zip",
    
    // "role": "main"
  })
  .then(
    (theme) => {
      res.json(theme)
       console.log(theme)
    },
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


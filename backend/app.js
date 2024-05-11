const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const { db } = require("./Db/db");
const router = require("./Routers/transactionRoute");
require("dotenv").config();
const PORT = process.env.PORT || 5001;

//middlewares
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

// available routes
app.use("/api/", router);

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log(`App is listening on  http://localhost:${PORT}`);
  });
};
server();

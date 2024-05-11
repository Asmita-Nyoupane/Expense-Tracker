const mongoose = require("mongoose");
require("dotenv").config();
const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connect to database");
  } catch (error) {
    console.log("Connection error", error);
  }
};
module.exports = { db };

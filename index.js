const { db_connection } = require("./config/db");
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

const port = process.env.PORT;
const db = process.env.DB;

db_connection()

app.listen(port, (req, res) => {
  console.log(`server running on port ${port}`);
});

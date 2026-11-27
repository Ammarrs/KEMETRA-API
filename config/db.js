const mongoose = require("mongoose");
require("dotenv").config();


let cashed_connection = null;

const db_connection = async () => {
  try {
    const db = process.env.DB;

    if (!db) {
      throw new error("error in connection string");
    }

    if (mongoose.connection.readyState === 1) {
      mongoose.connection;
    }

    if (cashed_connection) {
      return mongoose.connection;
    }

    cashed_connection = mongoose
      .connect(db, {
        maxPoolSize: 5,
        bufferCommands: false,
        serverSelectionTimeoutMS: 10000,
        socketTimeoutMS: 45000,
      })
      .then(() => {
        console.log("DB Connected");
        return mongoose.connection;
      })
      .catch((e) => {
        cashed_connection = null;
        console.log(e.message);
        throw new error();
      });
  } catch (e) {
    console.log(`DB disconnected due to  ${e.message}`);
  }
};

module.exports = { db_connection };

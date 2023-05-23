//module dependencies
const mongoose = require("mongoose");
const config = require("../config/default");
const logger = require("../utils/logger");

function connectToDb() {
  //get db from config module, depending on the node environment
  const db = config.db;

  //connect to the database
  return mongoose
    .connect(db, {
      useNewUrlParser: true,
    })
    .then(() => {
      logger.info(`connected to database`);
    })
    .catch((err) => {
      console.log("Error connecting to database", err);
      process.exit(1);
    });
}

module.exports = connectToDb;

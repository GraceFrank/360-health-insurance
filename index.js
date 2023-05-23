require("dotenv").config();
const express = require("express");
const connectToDb = require("./startup/database-connection");
const logger = require("./utils/logger");
const config = require("./config/default");
const routes = require("./routes/index");
const cors = require("cors");

const app = express();
app.use(cors());

routes(app);

if (!config.privateKey) {
  logger.error(`API Private Key not defined. Exiting process...`);
  process.exit(1);
}

const port = config.apiPort || 4000;
connectToDb().then(() => {
  app.listen(port, () => logger.info(`listening on port ${port}`));
});

require('dotenv').config();


module.exports = {
  apiPort: process.env.PORT,
  db: process.env.DATABASE_URL,
  privateKey: process.env.API_PRIVATE_KEY,
};



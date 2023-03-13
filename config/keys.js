require("dotenv").config();

module.exports = {
  APPLICATION_NAME: process.env.APPLICATION_NAME || "USER_LISTING_WEBSITE", // This is the name of the application
  DOMAIN: process.env.DOMAIN || `http://localhost:${process.env.PORT || 3000}`, // This is the domain of the application
  PORT: process.env.PORT || 3000, // This is the port of the application
  MONGO_DB_URL:
    process.env.MONGO_DB_URL ||
    "mongodb://localhost:27017/user_listing_website", // This is the mongo db url connection string
  NODE_ENV: process.env.NODE_ENV || "development", // This is the environment of the application
};

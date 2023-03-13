const mongoose = require("mongoose");
const { MONGO_DB_URL } = require("../config/keys");

/**
 * @description Connects to MongoDB
 */
const mongoDbConnection = async () => {
  try {
    await mongoose.connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info("MongoDB connected");
  } catch (error) {
    logger.error(error.message);
    return error;
  }
};

module.exports = mongoDbConnection;

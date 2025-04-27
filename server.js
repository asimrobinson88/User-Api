const express = require("express");

const mongoose = require("mongoose");

require("dotenv").config();

const userRoutes = require("./user-api/routes/userRoutes");

const { errorHandler } = require("./user-api/middlewares/errorHandler");

const logger = require("./user-api/utils/logger");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/users", userRoutes);

app.use(errorHandler);

const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => {
    logger.info("Connected to MongoDB");

    app.listen(port, () => {
      logger.info(`Server running at http://localhost:${port}`);
    });
  })

  .catch((err) => {
    logger.error("Could not connect to MongoDB:", err);

    process.exit(1);
  });

module.exports = app;

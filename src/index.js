const express = require("express");
require("dotenv").config();

const db = require("./database");
require("./models");

const app = express();

const PORT = process.env.PORT || 4000;

const startApplication = async () => {
  try {
    await db.authenticate();
    await db.sync();
    app.listen(PORT, () => {
      console.log(`Server is running on port - ${PORT}`);
    });
  } catch (error) {}
};

startApplication();

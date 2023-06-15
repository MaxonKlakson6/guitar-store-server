const express = require("express");
require("dotenv").config();
const cors = require("cors");

const db = require("./database");
const { UserModel } = require("./models");
const router = require("./routes");
const load = require("./helpers/loadMockToDatabase");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 4000;

const startApplication = async () => {
  try {
    await db.authenticate();
    await db.sync();
    app.listen(PORT, () => {
      console.log(`Server is running on port - ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startApplication();

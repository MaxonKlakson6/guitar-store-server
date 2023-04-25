const jwt = require("jsonwebtoken");

module.exports = (token) =>
  jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);

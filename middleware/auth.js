const jwt = require("jsonwebtoken");
require("dotenv").config(); // To load environment variables from .env

const verifyToken = (req, res, next) => {
  // const token = req.cookies.token; // Cross-domain
  const token = req.headers.authorization.split(" ")[1]; //Cross-domain

  console.log("token", token);

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;

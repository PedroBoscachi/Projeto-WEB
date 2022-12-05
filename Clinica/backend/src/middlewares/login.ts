import { Request } from "express";

const jwt = require("jsonwebtoken");

module.exports = (request, response, next) => {
  try {
    //const decode = 
    jwt.verify(request.headers['authorization'], "secret");
    //request.user = decode;
    next();
  } catch (error) {
    return response.status(401).send({ message: "Failure in authentication21" });
  }
};

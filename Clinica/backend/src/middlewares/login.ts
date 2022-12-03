const jwt = require("jsonwebtoken");

module.exports = (request, response, next) => {
  try {
    const decode = jwt.verify(request.body.token, "secret");
    request.user = decode;
    next();
  } catch (error) {
    return response.status(401).send({ message: "Failure in authentication" });
  }
};

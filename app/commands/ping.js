const responseBuilder = require("../response_builder");
module.exports = (_commandArgs) => {
  return responseBuilder.buildResponse("PONG");
};

const responseBuilder = require("../response_builder");

module.exports = (commandArgs) => {
  return responseBuilder.buildResponse(commandArgs[0]);
};

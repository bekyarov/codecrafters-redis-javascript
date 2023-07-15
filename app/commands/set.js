const responseBuilder = require("../response_builder");
const dataStore = require("../datastore");

module.exports = (commandArgs) => {
  const key = commandArgs[0];
  const value = commandArgs[1];
  dataStore.set(key, value);
  return responseBuilder.respondOK();
  1;
};

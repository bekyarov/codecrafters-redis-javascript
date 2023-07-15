const responseBuilder = require("../response_builder");
const dataStore = require("../datastore");

module.exports = (commandArgs) => {
  const key = commandArgs[0];
  const value = dataStore.get(key);
  if (value) {
    return responseBuilder.respondStringValue(value);
  } else {
    return responseBuilder.respondNil();
  }
};

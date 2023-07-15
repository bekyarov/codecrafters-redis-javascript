const buildResponse = (data) => {
  return `+${data}\r\n`;
};

const respondOK = () => {
  return buildResponse("OK");
};

const respondNil = () => {
  return "$-1\r\n";
};

const respondStringValue = (value) => {
  const length = value.length;
  return `$${length}\r\n ${value}\r\n`;
};

module.exports = { buildResponse, respondOK, respondNil, respondStringValue };

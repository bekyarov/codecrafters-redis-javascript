const echo = (commandArgs) => {
  return `+${commandArgs[0]}\r\n`;
};

const ping = (_commandArgs) => {
  return "+PONG\r\n";
};

module.exports = { echo, ping };

const net = require("net");
const commands = require("./commands");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this block to pass the first stage  test
const server = net.createServer((connection) => {
  // Handle connection 123
  // connection.on("data", () => {
  //   console.log("connected");
  //   connection.write("+PONG\r\n");
  // });
  // connection.on("end", () => {
  //   console.log("you've disconnected");
  // });

  connection.on("data", (data) => {
    connection.write(processData(data));
  });
});

server.listen(6379, "127.0.0.1");

const processData = (data) => {
  data = data.toString().split("\r\n");
  args = parseInt(data[0].slice(1));

  const command = data[2].toLowerCase();
  const commandArgs = [];

  for (let i = 3; i <= args * 2; i += 2) {
    commandArgs.push(data[i + 1]);
  }

  const commandFunc = commands[command];
  return commandFunc(commandArgs);
};

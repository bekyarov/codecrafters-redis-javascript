const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this block to pass the first stage  test
const server = net.createServer((connection) => {
  // Handle connection 123
  connection.on("data", () => {
    console.log("connected");
    connection.write("+PONG\r\n");
    connection.write("+PONG\r\n");
    connection.write("+PONG\r\n");
  });
  connection.on("end", () => {
    console.log("you've disconnected");
  });
});

server.listen(6379, "127.0.0.1");

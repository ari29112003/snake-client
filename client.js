const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection(
    {
      host: "localhost", // IP address here,
      port: 50541  // PORT number here,
    });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // logge a message when you make the conection 
  conn.on("connect", () => {
    console.log(`Name:AFG`);
    console.log("successfully connected!");
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {
  host: "localhost",
  port: 50541,
  connect
}
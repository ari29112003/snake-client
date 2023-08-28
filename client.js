const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection(
    {
      host: IP, // IP address here,
      port: PORT  // PORT number here,
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
  connect
}



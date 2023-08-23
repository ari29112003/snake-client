const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection(
    {host:"localhost", // IP address here,
    port:  50541  // PORT number here,
});
conn.on("connect",()=>{
  console.log(`Name:AFG`);
})
//to logged the message when you make the conection 
conn.on("connect", () => {
  console.log("successfully connected!");
}).on("error", (err) => {
  console.log(err);
});
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  

  return conn;
};

console.log("Connecting ...");
connect();

module.exports ={
  host:"localhost",
  port:50541
}
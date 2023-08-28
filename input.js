const net = require("net");
let connection;

const setupInput = function (conn) {
  conn = net.createConnection(
    {
      host: "localhost", // IP address here,
      port: 50541  // PORT number here,
    });
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = function (key) {
  if (key === '\u0003') {
    console.log(`    exit game   `);
    process.exit()
    //if crtl+c pressed exit game

  } if (key === 's') {
    connection.write(`Move: down`);
    // "Move: down" - move down one square

  } if (key === 'w') {
    connection.write("Move: up");
    //"Move: up" - move up one square

  } if (key === 'a') {
    connection.write("Move: left");
    // "Move: left" - move left one square

  } if (key === 'd') {
    connection.write("Move: right");
    //"Move: rigth" - move rigth one square
  
  } if (key=== 'k'){
    connection.write("Say: kkkk ")
  
  } if (key=== 'n'){
    connection.write("Say: nice")
   
  } if (key === 'b'){
    connection.write("Say: beijoss")
  } 
};

setupInput()


module.exports = {
  setupInput
}



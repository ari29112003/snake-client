const setupInput = function () {
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

  } if (key === 's') {
    process.stdout.write(`Move: down`)

  }
};


setupInput()


module.exports = {
  setupInput
}


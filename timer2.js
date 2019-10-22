const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write("\n Thanks for using me, ciao!\n");
    process.exit();
  }
  if (key === 'b') {
    process.stdout.write('\x07');
  }
  if (+key > 0 && +key <= 9) {
    process.stdout.write(`\nsetting timer for ${key} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, +key * 1000);
  }
});


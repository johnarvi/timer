const argv = process.argv;
const times = argv.slice(2).sort((a,b) => (a - b));
for (let i = 0; i < times.length; i++) {
  if (times[i] > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, +times[i] * 1000);
  }
}
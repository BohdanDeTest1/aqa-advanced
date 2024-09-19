process.stdout.write('Hello, World');
process.stdout.clearLine(0);
process.stdout.cursorTo(0);
process.stdout.write('\n');
setInterval(() => process.stdout.write(`time left: ${new Date()}`), 1000);

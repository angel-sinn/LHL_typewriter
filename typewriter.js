// const sentence = "hello there from lighthouse labs";

function callback(string) {
  let delay = 0;
  for (const char of string) {
    setTimeout(() => {
      process.stdout.write(char);
    }, (delay += 50));
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, delay);
}

callback("hello there from lighthouse labs");

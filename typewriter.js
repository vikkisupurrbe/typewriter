const sentence = "hello there from lighthouse labs";

let timer = 0;
for (const char of sentence) {
  setTimeout(() => {process.stdout.write(char); console.log()}, timer += 50)
}
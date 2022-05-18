console.log('Hello from background script');
console.log(this);

let time = 0;

setInterval(() => {
  time += 1
  console.log(time)
}, 1000)
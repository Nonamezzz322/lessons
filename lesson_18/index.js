let n = 6;
let r = 3;
let m = 1000;

let prom = new Promise(function(resolve, reject){
    setTimeout(() => resolve('succes'), 1000)
});
prom.then((resolve) => console.log(2 + n));
prom.then((resolve) => console.log(r * 1000));
prom.then((resolve) => setTimeout(() => console.log('succes'), m));
prom.then((resolve) => console.log('done'));
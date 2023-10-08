// function holler(){
//     console.log('HEY YOU');
// }

// const whisper = function(){
//     console.log('pssst I have a secret');
// }

// function add(x,y) {
//     return x + y;
// }
// function subtract(x,y) {
//     return x - y;
// }
// function multiply(x,y) {
//     return x * y;
// }
// function divide(x,y) {
//     return x / y;
// }
// function power(x,y) {
//     return x ** y;
// }

// const mathFuncs = [add, subtract, multiply, divide, power];

// setTimeout(whisper, 4000);

// function doMath(a, b, mathFunc){
//     return mathFunc(a,b)
// }

// doMath(3,4, function(a,b){
//     console.log(a ** b);
// })

// function doAllMath(a,b,mathFuncs) {
//     for(let func of mathFuncs) {
//         func(a,b);
//         console.log(func(a,b));
//     }
// }

const colors = ['teal', 'cyan', 'peach', 'purple'];

// function yell(val, i) {
//     const caps = val.toUpperCase();
//     console.log(`At index ${i}, ${caps}`);
// }

// colors.forEach(yell);

// const prices = [30.99, 19.99, 2.50, 99.00];
// let total = 0;
// prices.forEach(function(price){
//     total += price;
// })

// console.log(total);


function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++){
        callback(arr[i]);
    }
}

forEach(colors, function(color){
    console.log(color.toUpperCase());
})

colors.forEach(function(color, i) {
    console.log(color.toUpperCase(), 'at index of:', i);
});
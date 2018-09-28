'use strict'
//дз на годы
// const myAge = 20;
// let ending = 'лет';

// if (myAge % 100 > 10 && myAge % 100 < 15) {
// 	ending = 'лет'
// } else if (myAge % 10 === 1) {
// 	ending = 'год'
// } else if (myAge % 10 > 1 && myAge % 10 < 5) {
// 	ending = 'года'
// }

// console.log('Мой возраст' + myAge + '' + ending);


// //дз с массивом

// const arr1 = {1, 2, 3, -2};

// const result = {};
// let sum = 0;
// let min = Infinity;
//  let max = -Infinity;

// let notNumber = 0;

// for (let i = 0; i < arr1.length; i += 1) {
// 	if (typeoff arr1[i] !== 'number') {
// 	sum += arr1[i]; //среднее арифметическое
// 		if  (arr1[i] < min) { // минимальное число
// 			min = arr1[i];
// 		}
// 		if  (arr1[i] > min) { // максимальное число
// 			max = arr1[i];
// 		}
// 		if  (arr1[i] < 0) { // кол-во негативных
// 			negative += 1;
// 		}	
// 	} else {
// 		notNumber +=1;
// 	}		
// } 


// result.avg = sum / arr1.length;
// result.min = min;
// result.max = max;
// result.negative = negative;


// console.log(result)

// const arr = [ //задача на многомерность
// 	[1, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 'e'],
// ]
// let x = 0;
// let y = 0;
// for (; x < arr[0].length - 1 || y < arr.length - 1;) {
// 	arr[y][x] = 0;

// 	if (x < arr[0].length - 1) {
// 		x += 1;
// 	} else {
// 		y += 1;
// 	}
// 	arr[y][x] = 1;
// }

// console.log(arr[y][x])


// const arr = [ //выясняем минимальное число в матрице
// 	[1, 0, 0, 0, 0],
// 	[0, 0, 0, -8, 0],
// 	[0, 0, 0, 0, 0],
// 	[0, 0, -1, 0, 0],
// 	[0, 0, 0, 0, 0],
// 	[0, -6, 0, 0, 0],
// 	[0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0],
// 	[0, 0, -23, 0, 'e'],
// ];
// const res = {
// 	value: Infinity,
// 	x: 0,
// 	y: 0,
// }
// for (const y in arr) {
// 	for (const x in arr[y]) {
// 		if (arr[y][x] < res.value) {
// 			res.value = arr[y][x];
// 			res.y = y;
// 			res.x = x;
// 		}
// 	}
// }
// console.log(res);

//функции
// function hello (name, age) {
// 	console.log('hello, my name is: ' + name + ' I am ' + age + ' years');
// }
// hello('Boris', 43);
// hello('Murlock', 53);

// function calc(a, b) {
// 	if (a>b){
// 		console.log('2');
// 		return a - b;
// 	}
// 	console.log('3');
// 	return a + b;
// }
// const sum = calc(2,53);
// console.log (sum);

// function sum(arr) {
// 	let s = 0;
// 	for (const v of arguments) {
// 		s += v;
// 	}
// 	return s;
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7))


// function sum(a, b, ...arr) { // три точки - аргумент рест
// 	console.log(arr);
// 	let s = 0;
// 	for (const v of arguments) {
// 		s += v;
// 	}
// 	return s;
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7))
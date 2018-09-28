'use strict'

let summarize = (a) => {  //суммирует бесконечное кличество аргументов
	const res  = function(b){
		a+=b;
		console.log(a);

		return res;
	}
	return res;
}
let obj = {name:1, };
let obj2 = Object.assign ({}, obj); ///копировать объект способ 1
let obj3 = {a:'', ...obj}; ///копировать объект способ 2  (с массивами так же работать будет)
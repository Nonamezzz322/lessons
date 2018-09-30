'use strict'


//body

function calculate() {
	let input;
	input = prompt('Введите 1 или 2');
	if (input === '1') {
		return calc1();
	}else if (input === '2') {
		return calc2();
	} else if (input === 'exit') {
		return;
	} else {
		return calculate();
	}
}

//func 1
function calc1() {
	let formula1 = prompt('y = kx + b, введите значение "k"');
	let k = +formula1;
	if (typeof k === 'number'){
		let formulaX = prompt('y = kx + b, введите значение "x"');
		let x = +formulaX;
		if (typeof x === 'number'){
			let formulaB = prompt('y = kx + b, введите значение "b"');
			let b = +formulaB;
			if (typeof x === 'number'){
				let y = k * x + b;
				alert(y);
				return calculate();
			}
		} else {
			return calc1();
	}
	} else {
		return calc1();
	}
}
//funck2
function calc2() {
	let formula2 = prompt('y = x^2, введите значение "x"');
	let x = +formula2;
	if (formula2 === 'exit') {
		return;
	} else if (isNaN(formula2)){
		return calc2();	
	} else {
		let y = x*x;
		alert(y);
		return calculate();
	}
}


// function calc1() {
// 	let formula1 = prompt('y = kx + b, введите значение "k"');
// 	let k = +formula1;
// 	if (typeof k === 'number'){
// 		let formulaX = prompt('y = kx + b, введите значение "x"');
// 		let x = +formulaX;
// 		if (typeof x === 'number'){
// 			let formulaB = prompt('y = kx + b, введите значение "b"');
// 			let b = +formulaB;
// 			if (typeof x === 'number'){
// 				let y = k * x + b;
// 				alert(y);
// 				return returned();
// 			}
// 		} else {
// 			return calc1();
// 	}
// 	} else {
// 		return calc1();
// 	}
// }

// Разработать диалог с пользователем
// Написать функцию calculate()
// Которая начнет диалог с пользователем с помощью prompt:
// Если пользователь пишет “exit” на любом этапе - функция заканчивается и 
// возвращает значение
// Первый диалог: Выбор формулы y = kx + b или y = x^2. Дать пользователю 
// выбор с помощью prompt, если введет 1 то первая, если 2 - то вторая, если
//  значение невалидное, повторить показ диалога
// После Выбора формулы необходимо предоставить возможность задать значения 
// каждого из аргументов (k, x, b) для первой и (x) для второй, если значение
//  не валидное - повторять показ диалога
// Рассчитать y по выбранной форме используя введенные аргументы, вывести в alert
// Начать с начала

// Возвращаемое значение функции это объект: {
// 	history: [‘2’, ‘4’, ‘exit’], // история всех введенных пользователем
// 	 сообщений в prompt
// 	formula: ‘y = x^2’, // последняя выбранная формула
// 	args: { x: 4 }, // аргументы введенные пользователем для последней формулы

'use strict'
// function print(size) { //рисует треугольник звёздочками
// let result = '\n';
// const width = size*2-1;
// 	for (let i = 0; i < size; i +=1) {
// 		if (i < size -1) {
// 			result += `${''.repeat(i)}*${'* '.repeat(width - 2 - i*2)}*\n`;
// 		} else 
// 		result +=' '.repeat(i) + '*\n';
// 	}
// 	return result;
// };

// function least(input) { //сортировка строк массива по длине

// 	input.sort((a, b) => {
// 		if (a.length < b.length) {
// 			return -1;
// 		};
// 		if (a.length > b.length) {
// 			return 1;
// 		};
// 		return 0;
// 	});
// 	return input;
// };
// function removeLeast (array) { //массив удаляет подмассив с самым большим количеством нулей
// 	let maxCount = 0;
// 	let maxI = -1;
// 	for(const subArr in array) {
// 		let count = 0;
// 		for (const value of arrau[subArr]) {
// 			if (value === 0) {
// 				count +=1;
// 			}
// 		}
// 		if (count > maxCount) {
// 			maxCount = count;
// 			maxI = +subArr;
// 		}
// 	}
// 	return array.filter((a, key) => !== maxI);
// }

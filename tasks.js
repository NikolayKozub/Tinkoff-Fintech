/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
let param = prompt('введите числа и буквы','');
let number_regexp = /[-]{0,1}[\d]*[\.]{0,1}[\d]+/g;
let string = param.match(number_regexp)

function getMinMax(string) {
	let numberMin = Math.min.apply(null, string);
	let numberMax = Math.max.apply(null, string);
	  let obj = {
	    min: numberMin,
	    max: numberMax
	  };
	return obj;
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  if (x < 2){ return x 
  }else{
   return fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
  }
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(n) {
  if (n < 2){ return n 
  }else{
   return fibonacciSimple(n - 1) + fibonacciSimple(n - 2);
  }
}

function  memorizer(fibonacciSimple){
  let cache = [];
  return function(n){
    let index = n.toString();
    if(cache[index] == null){
      return cache[index] = fibonacciSimple(n);
    }

    return cache[index];
  };
}
let fibonacciWithCache = memorizer(fibonacciSimple);

console.time("Execution time took");
fibonacciWithCache(40) //  1581.423095703125ms
console.timeEnd("Execution time took");
console.time("Execution time took");
fibonacciWithCache(40) // 0.02001953125ms
console.timeEnd("Execution time took");
/* ============================================= */

/**
 * Напишите функцию printNumbers, выводящую числа в столбцах
 * так, чтобы было заполнено максимальное число столбцов при
 * минимальном числе строк.
 * Разделитель межу числами в строке - один пробел,
 * на каждое число при печати - отводится 2 символа
 * Пример работы: printNumbers(11, 3)
 *  0  4  8
 *  1  5  9
 *  2  6 10
 *  3  7 11
 * @param  {number} max  максимальное число (до 99)
 * @param  {number} cols количество столбцов
 * @return {string}
 */
let printNumbers = function (max, cols) {
     result = [],
     rows = Math.ceil(max/cols);
     if(max > 99){
     	return console.log('why so many?');
     }

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < cols; c++) {
            let num = r + (c * rows);
            if (num <= max) {
                row.push(num); 
            }
        }

        result.push(row.join(' '));
    }
    return result.join('\n');
};

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
let input = 'werwerwerwweeeeeewwwwwwwww';
 function rle(input){
  let rleString = "";
  for(let i = 0;i < input.length;i++){
    let currentLetter = input[i];
    let curCount = 1;
    while(input[i+1] === currentLetter){
      curCount ++;
      i++;
    }
    rleString += currentLetter + curCount;
  }
  if(rleString.length > input.length){

    return input;
  }
  return rleString; // /1/g
}
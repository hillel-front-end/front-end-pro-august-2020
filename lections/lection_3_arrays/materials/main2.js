/*
Lection 3 - Array
 * Math
 * [], [].length
 * Доступ по индексу
 * Обращение к первому/последнему элементу массива
 * Добавление элемента в массив
 * [].length = 20 || data[30] = 'foo'
 * Заполнения массива случайными числами
 * Пример - перебор
 * new Array()
*/

// ----------------------- Math -------------

/*
  1. Math
  Math​.round() - возвращает число, округлённое к ближайшему целом
  Math.floor() - возвращает целое число, которое меньше или равно данному 
  Math.ceil() - округляет аргумент до ближайшего большего целого.

  Math.random() - получени случайного числа от 0 - 1

  Форумула получени случайного числа в диапазоне от min (включительно) до max 
  (не включительно):
  
  Math.random() * (max - min) + min;
*/

console.log(Math.round(1.5), 'Math.round(1.5)');
console.log(Math.round(1.4), 'Math.round(1.4)');
console.log(Math.floor(1.5), 'Math.floor(1.5)');
console.log(Math.ceil(1.2), 'Math.ceil(1.2)');
console.log(Math.round(Math.random() * (10 - 5) + 5))

// ----------------------- Array -----------------

data = ['A', 'B', 'C', 'D'];


console.log(data.length, 'length');

// console.log(data[0], 'data[0]');
// console.log(data[1], 'data[1]');
// console.log(data[2], 'data[2]');

// data.length = 1000;
console.log(data[0], 'first');
console.log(data[data.length - 1], 'last');


// data[500] = "G";


data[2] = 123;

// data = 123;

data[data.length - 1] = [123]
console.log(data, 'data');

// data = [1, 2];
// data.length = 10;

// array = new Array(10, 15);

// console.log(data, 'data');
// console.log(array, 'array');



// for(i = 0; i < data.length;i++) {
//   console.log(i, data[i]);

// }


array = new Array(3);

console.log(array, 'array before');

// 0 < 0

// for(i = 0, size = array.length; i <= size; i++) {
//   array[i] = prompt('Input value');
//   console.log(array, 'array');
//   array.length = 100;
// }

// console.log(array, 'array after');

// data = [];

// console.log(data.length, 'first length');

// data[data.length] = 12;

// console.log(data.length, 'second length')


// size = 10;
// array = new Array(size);
// min = - 20;
// max = 20;

// for (i = 0, sum = 0; i < size; i++) {
//   arrayItem = Math.round(Math.random() * (max - min) + min);
//   array[i] = arrayItem;

//   if (arrayItem > 0 && arrayItem % 2 == 0) {
//     sum += arrayItem;
//   }
// }


// array[array.length] = 0;

// console.log(array, 'array');



size = 30;
array = new Array(size);
min = -5;
max = 5;

A = [];

B = [];

for (i = 0; i < size; i++) {
  arrayItem = Math.round(Math.random() * (max - min) + min);
  array[i] = arrayItem;

  if (array[i] > 0) {
    A[A.length] = arrayItem;
  }

  if (array[i] < 0) {
    B[B.length] = arrayItem;
  }
}

min = A[0];
max = A[0];
minJ = 0;
maxJ = 0;

for (j = 1; j < A.length; j++) {
  if (A[j] >= max) {
    max = A[j];
    maxJ = j;
  }

  if (A[j] <= min) {
    min = A[j];
    minJ = j;
  }
}

swap = A[minJ];
A[minJ] = A[maxJ];
A[maxJ] = swap;


console.log("При массиве", A, "----> ", max, min, 'max, min');
console.log(minJ, maxJ, 'minJ, maxJ')






// 3.(**) Перевернуть массив, т.е. если был массив 1, 5, 6, 2, 4 -- то мы должны получить 4, 2, 6, 5, 1. 
// Нельзя использовать стандартный метод reverse(). Постарайтесь не использовать дополнительный массив.




mass = [1, 2, 3, 4, 5 , 6];


for (i = 0; i < mass.length/ 2; i++) {
  temp = mass[i];
  mass[i] = mass[mass.length - (1 + i)];
  mass[mass.length - (1 + i)] = temp;
}

console.log(mass, 'mass');
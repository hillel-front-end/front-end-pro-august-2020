/*
Lection 1 - JavaScript Intro
  1. JS Введение
  2. Подключение скриптов
  3. Именование переменных
  4. Переменные + типы(String, Number),  NaN,
  5. Консоль разработчика
  6. Operators
*/

/*
  # 1. JS Введение
   * LiveScript - JavaScript;
   * JavaScript — это язык программирования, который даёт возможность реализовывать сложное 
     поведение веб-страницы. Является интерпретируемым языком.
   * Интерпретация – это когда исходный код программы получает другой инструмент, который называют «интерпретатор», 
     выполняет его «как есть». При этом распространяется именно сам исходный код (скрипт). 
     Этот подход применяется в браузерах для JavaScript. 
*/

age = 1;
firstName = 'Valera';
lastName = "'Ternavskiy'";



console.log(age, firstName, lastName);

foo = 123;
foo = 'Valera';



a = 1; 
b = 2;
c = a + b;

console.log(a + b, 'c');


// g = c - 2;

h = 11;
z = 2;

g = h * z;
console.log(g, 'g = h * z');

g = h / z;

console.log(g, 'g = h / z;');

g = h % z;

console.log(g, '11 % 2');


b = '123abc';

console.log(b, 'b');


sum = '12' + '13';

age = 12;
firstName = 'Valera';

fullInfo = firstName  + age;


console.log(fullInfo, 'firstName  + age');

fullInfo = firstName  * age;


console.log(fullInfo, 'firstName  * age');


sum = '10' * '2';

console.log(sum, 'sum');


abc = '13 Valera';

age = parseInt(abc);

console.log(age, 'age');
/*
    +
    bool
    typeof
    isNaN()
    if else
    logical operators [>,<, >=, <=, ==, ===, !] 
    logical and or, 
    if else else if // at home
    тернарный оператор ? // at home
    циклы основы
    while () {}
    do {} while()
    for(){} (прим. не парн.)
    for(){for(){}}
*/

boolValue = false;
// foo = 0;
// foo = NaN;
foo = " ";

if (foo) {
  console.log('to Do');
} else {
  console.log('another to Do');
}


res = "hello" * true;

console.log(res, 'res');

console.log(!'213', '!123');


console.log(!null, 'null');

/*
  Важно помнить что  такие значения как: 
    1)Число 0, 
    2)пустая строка "", //Любая строка, кроме пустой, в логическом контексте является true.
    3)null 
    4)undefined,
    5)NaN
  - При преобразовании в булевое значние будет === false;
  - Все остальное === true.
 */

// --------------------------------

console.log(12 > 18, '12 > 18');
console.log(12 < 18, '12 < 18');
console.log(18 > 18, '18 > 18');
console.log(18 == '18', '18 == 18');
console.log(18 === '18', '18 == 18');

// console.log(null == undefined);


if (false) {
  
  if (true) {

  } 
} else if(true) {

} else if(true) {

} else {

}


if (true) {

} 


if (true) {

}

age = 21;

role = 'admin';


// && - ||
if (age > 18 && age < 25) {
  console.log('welcome');

  if (role == 'admin') {
    console.log('hello admiin');
  } else if (role == 'user') {
    console.log('.....');
  }
} else {
  console.log('go out');
}


// if ((false && false || true) {
//   console.log('hello');
// }


// value = +prompt('input value') || 100;


// console.log(value, 'value');

// ---------- LOOP -----------

  count = 0;

// do {
//   count = 0; //bad 
//   isGo = confirm('Хотите уйти');
//   console.log('work');
//   count = count + 1;
// } while(isGo && count < 3)

count = 0;

while (count <= 5) {
  console.log('to Do');

  count += 1; // count = count + 1
}


// for (index = 0; index < 5; index++) {
//   console.log('work');
// }


index = 0;

for(; index < 5;) {
  index++;
}
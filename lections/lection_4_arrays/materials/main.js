/*
  Lection 4 - Array
  * Двумерные массивы
  * Зубчатые массива\ Ступенчатые массивы
*/


arr = [1, 2, 3, 4, 5, 6, 7];

// document.write(arr.join('_'), 'join');


// document.write('<span>' + 123 + '</span>');


// document.write("<ul>");
// for(i = 0; i < arr.length; i++) {
//   document.write('<li>' + arr[i] + '</li>');
// }
// document.write("</ul>");


arr = [1, 2, 3];
document.write("<ul><li>");
document.write(arr.join('</li><li>'))
document.write("</li></ul>");


arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 10]
];

// console.log(arr, 'arr');

// console.log(arr[1][1], 'arr[1][1]')

size = 5;
data = new Array(size);


for( i = 0; i < data.length; i++) {
  data[i] = new Array(size);

  for (j = 0; j < data[i].length; j++) {
    data[i][j] = Math.ceil(Math.random() * 10);

    document.write(data[i][j]);
  }
  document.write('<br />');
}

array = [1, 5, 5, 5, 5, 7, 7, 7, 9, 9, 10, 11, 12, 14, 15];
//Assume that array is in ascending order
//Find how many different number in array

var count = 1;
for (var i = 0; i < array.length - 1; i++) {
  if (array[i + 1] > array[i]) {
    count++;
  }
}
console.log(count);

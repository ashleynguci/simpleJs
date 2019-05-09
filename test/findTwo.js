var arr = [1, 2, 3, 5, 3, 2, 6, 7, 2, 2, 2, 8, 5, 9, 2, 4];
//Find out how many 2 in array
var count = 0;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] == 2) {
    count++;
  }
}
console.log(count);

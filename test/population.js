var country = ["UK", "US", "Finland", "Sweden"];
var pops = [123, 323, 53, 89];
var highestpops = pops[0];
var sum = 0;
var index = 0;
for (var i = 0; i < pops.length; i++) {
  if (pops[i] > highestpops) {
    highestpops = pops[i];
    index = i;
  }
  sum = sum + pops[i];
}
//After the loop, you can find highest pops and its index;
//var name = country[index];var population = highestpops
var name = country[index];
var population = highestpops;
var percent = Number((highestpops / sum) * 100).toFixed(2);
console.log(name + " " + highestpops + " " + percent);
console.log(percent);

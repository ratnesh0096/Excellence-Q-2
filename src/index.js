import "./styles.css";
let array = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0];
let max = 0,
  temp = 0;
let i = 0,
  j = 0,
  k = 1;
while (i < array.length) {
  // if (array[i] === 1) {
  j = i;
  temp = 0;
  while (j < array.length && array[j] === 1) {
    // console.log(j);
    j++;
    k++;
    temp++;
  }
  if (temp > max) {
    max = temp;
  }
  // }
  i += k;
  k = 1;
}
console.log(max);
document.getElementById("app").innerHTML = `
<h1>Question 2</h1>

<div>
Find the maximum consecutive 1's in an array of 0's and 1's.
Example:
a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]
b) 1000010001 - Output :1 [Max num of consecutive 1's is 1]

</div>
`;

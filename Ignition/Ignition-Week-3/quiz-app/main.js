//There have been a few assignments that I thought would have worked better in a multi dimentional array but this one forced me to do it.  It was fun.

let avgB = 0.00
let avg1 = 0.00
let avg2 = 0.00
let sumB = 0.00
let sum1 = 0.00
let sum2 = 0.00
let countB = 0
let count1 = 0
let count2 = 0

let array1 = new Array(3);
for (let i = 0; i < 8; i++) {
array1[i] = new Array(8);
}
//NAME
array1[0][0] = "Rami";
array1[0][1] = "Natoya";
array1[0][2] = "Max";
array1[0][3] = "Lynn";
array1[0][4] = "Sasha";
array1[0][5] = "Mohammed";
array1[0][6] = "Jennifer";
array1[0][7] = "Denise";
//SCORE
array1[1][0] = 88;
array1[1][1] = 92;
array1[1][2] = 68;
array1[1][3] = 100;
array1[1][4] = 82;
array1[1][5] = 98;
array1[1][6] = 94;
array1[1][7] = 92;
//TEAM
array1[2][0] = 1;
array1[2][1] = 1;
array1[2][2] = 1;
array1[2][3] = 1;
array1[2][4] = 2;
array1[2][5] = 2;
array1[2][6] = 2;
array1[2][7] = 2;

for (let j = 0; j < 8; j++) {
  sumB = sumB + array1[1][j];
}
avgB = sumB / array1[1].length;

for (let j = 0; j < 8; j++) {
  if (array1[2][j] === 1) {
    sum1 = sum1 + array1[1][j];
    count1 = count1 + 1
  }
}
avg1 = sum1 / count1;

for (let j = 0; j < 8; j++) {
  if (array1[2][j] === 2) {
    sum2 = sum2 + array1[1][j];
    count2 = count2 + 1
  }
}
avg2 = sum2 / count2;

console.log("Average : " + avgB.toFixed(2));
console.log("Team 1 Average: " + avg1.toFixed(2));
console.log("Team 2 Average: " + avg2.toFixed(2));

for (let j = 0; j < 8; j++) {
  if (array1[1][j] >= 70) {
    countB = countB + 1;
  }
}
console.log("The number of passing grades: " + countB)
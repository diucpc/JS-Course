let scoreOfBANU19 = [297, 376, 177, 376, 197, 401];
let scoreOfIND = [398, 165, 496, 58, 481, 115];

let calculateAverage = (scoreList) => {
  let sum = 0;
  for (let i = 0; i < scoreList.length; i++) {
    sum += scoreList[i];
  }
  return sum / scoreList.length;
};

let averageOfBANU19 = calculateAverage(scoreOfBANU19);
let averageOfIND = calculateAverage(scoreOfIND);

if (averageOfBANU19 > averageOfIND) {
  console.log(`Bangladesh U19 is winner!`);
} else if (averageOfBANU19 < averageOfIND) {
  console.log(`India is winner.`);
} else {
  console.log(`Tie.`);
}

// Solution of Problem-1

// I am applying the formula of Matrics method

var calculateBMI = (mass, height) => mass / Math.pow(height, 2); // function for returning BMI
var isOverweight = (bmi) => (bmi >= 25 ? true : false);

var abul = {
  bmi: calculateBMI(50, 1.4),
  isOverweight: isOverweight(calculateBMI(50, 1.4))
};

var kabul = {
  bmi: calculateBMI(65, 1.5),
  isOverweight: isOverweight(calculateBMI(65, 1.5))
};

if (abul.isOverweight && kabul.isOverweight) {
  console.log(`Abul & Kabul both are overweighted!`);

  if (abul.bmi > kabul.bmi) {
    console.log(`Abul is fittest`);
  } else if (abul.bmi < kabul.bmi) {
    console.log(`Kabul is fittest`);
  } else {
    console.log(`Ehh! They are same!`);
  }
} else if (abul.isOverweight && !kabul.isOverweight) {
  console.log(
    `Aabul is overweighted but Kabul is not overweighetd! And, Kabul is the fittest.`
  );
} else if (!abul.isOverweight && kabul.isOverweight) {
  console.log(
    `Abul is not overweighted but Kabul is overweighted! And, Abul is the fittest`
  );
} else {
  console.log(`No one is overweighted`);

  // Need to code more! I will update later
}

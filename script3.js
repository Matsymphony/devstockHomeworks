const number1 = 10;
const number2 = 0;
const operationType = "/";

if (
  operationType !== "+" &&
  operationType !== "-" &&
  operationType !== "*" &&
  operationType !== "/"
) {
  console.log("Wybrano nieprawidłową operację");
} else if (operationType === "/" && number2 === 0) {
  console.log("Działanie nie może być wykonane z powodu dzielenia przez zero.");
} else {
  let result;

  switch (operationType) {
    case "*":
      result = number1 * number2;
      break;
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "/":
      result = number1 / number2;
      break;
  }

  const parity = result % 2 === 0 ? "parzysty" : "nieparzysty";
  console.log(`Wynik operacji to ${result}, który jest ${parity}`);
}

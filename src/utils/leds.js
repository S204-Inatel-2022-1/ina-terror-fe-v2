export function randomNumber(num) {
  const diceResult = Math.floor(Math.random() * num) + 1;
  return diceResult;
}

export function sleep(ms) {
  console.log("to aqui");
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function calcLeds() {
  const num = randomNumber(20);

  const noLed = [false, false, false, false, false];
  const ledGreen = [true, false, false, false, false];
  const ledGreenYelow = [true, true, false, false, false];
  const ledYellow = [true, true, true, false, false];
  const ledSalmon = [true, true, true, true, false];
  const ledRed = [true, true, true, true, true];

  console.log(num);

  switch (num) {
    case 15:
      return ledGreen;
    case 16:
      return ledGreen;
    case 17:
      return ledGreenYelow;
    case 18:
      return ledYellow;
    case 19:
      return ledSalmon;
    case 20:
      return ledRed;
    default:
      return noLed;
  }
}

console.log(calcLeds());

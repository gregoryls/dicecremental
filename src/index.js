import "./style.css";

// TODO
// show value of each roll to the side of points
// split index into appropriate modules

let points = 0;
const dicePool = [1, 2, 3, 4, 5, 6];

const rollButton = document.getElementById("rollButton");
const tier1 = document.getElementById("generatorTier1");

function getRandomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function removeLowestRoll() {
  dicePool.shift();
}
removeLowestRoll();
console.log(dicePool);
function displayPoints() {
  const display = document.getElementById("pointDisplay");
  //   const currentPoints = Number(display.textContent);
  //   const newPoints = currentPoints + pointAddition;
  display.textContent = points;
}

function rollDie() {
  const roll = getRandomIntFromRange(
    dicePool[0],
    dicePool[dicePool.length - 1],
  );
  // points += roll;
  if (roll > 3) points += 1;
}

rollButton.addEventListener("click", () => {
  rollDie();
  displayPoints();
});

tier1.addEventListener("click", () => {
  if (points <= 100) return;

  points -= 100;
  displayPoints();

  setInterval(() => {
    rollDie();
    displayPoints();
  }, 1000);
});

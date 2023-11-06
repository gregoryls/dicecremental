//

let points = 0;
const dicePool = [1, 2, 3, 4, 5, 6];

const rollButton = document.getElementById("rollButton");

function getRandomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

rollButton.addEventListener("click", () => {
  const roll = getRandomIntFromRange(
    dicePool[0],
    dicePool[dicePool.length - 1],
  );
  points += roll;
  console.log(points);
});

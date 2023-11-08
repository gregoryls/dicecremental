/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
//

let points = 0;
const dicePool = [1, 2, 3, 4, 5, 6];

const rollButton = document.getElementById("rollButton");
const tier1 = document.getElementById("generatorTier1");

function getRandomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
  points += roll;
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaWNlY3JlbWVudGFsLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vXHJcblxyXG5sZXQgcG9pbnRzID0gMDtcclxuY29uc3QgZGljZVBvb2wgPSBbMSwgMiwgMywgNCwgNSwgNl07XHJcblxyXG5jb25zdCByb2xsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb2xsQnV0dG9uXCIpO1xyXG5jb25zdCB0aWVyMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VuZXJhdG9yVGllcjFcIik7XHJcblxyXG5mdW5jdGlvbiBnZXRSYW5kb21JbnRGcm9tUmFuZ2UobWluLCBtYXgpIHtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVBvaW50cygpIHtcclxuICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb2ludERpc3BsYXlcIik7XHJcbiAgLy8gICBjb25zdCBjdXJyZW50UG9pbnRzID0gTnVtYmVyKGRpc3BsYXkudGV4dENvbnRlbnQpO1xyXG4gIC8vICAgY29uc3QgbmV3UG9pbnRzID0gY3VycmVudFBvaW50cyArIHBvaW50QWRkaXRpb247XHJcbiAgZGlzcGxheS50ZXh0Q29udGVudCA9IHBvaW50cztcclxufVxyXG5cclxuZnVuY3Rpb24gcm9sbERpZSgpIHtcclxuICBjb25zdCByb2xsID0gZ2V0UmFuZG9tSW50RnJvbVJhbmdlKFxyXG4gICAgZGljZVBvb2xbMF0sXHJcbiAgICBkaWNlUG9vbFtkaWNlUG9vbC5sZW5ndGggLSAxXSxcclxuICApO1xyXG4gIHBvaW50cyArPSByb2xsO1xyXG59XHJcblxyXG5yb2xsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgcm9sbERpZSgpO1xyXG4gIGRpc3BsYXlQb2ludHMoKTtcclxufSk7XHJcblxyXG50aWVyMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGlmIChwb2ludHMgPD0gMTAwKSByZXR1cm47XHJcblxyXG4gIHBvaW50cyAtPSAxMDA7XHJcbiAgZGlzcGxheVBvaW50cygpO1xyXG5cclxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICByb2xsRGllKCk7XHJcbiAgICBkaXNwbGF5UG9pbnRzKCk7XHJcbiAgfSwgMTAwMCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
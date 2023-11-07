/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
//

let points = 0;
const dicePool = [1, 2, 3, 4, 5, 6];

const rollButton = document.getElementById("rollButton");

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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaWNlY3JlbWVudGFsLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vXHJcblxyXG5sZXQgcG9pbnRzID0gMDtcclxuY29uc3QgZGljZVBvb2wgPSBbMSwgMiwgMywgNCwgNSwgNl07XHJcblxyXG5jb25zdCByb2xsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb2xsQnV0dG9uXCIpO1xyXG5cclxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50RnJvbVJhbmdlKG1pbiwgbWF4KSB7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlQb2ludHMoKSB7XHJcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9pbnREaXNwbGF5XCIpO1xyXG4gIC8vICAgY29uc3QgY3VycmVudFBvaW50cyA9IE51bWJlcihkaXNwbGF5LnRleHRDb250ZW50KTtcclxuICAvLyAgIGNvbnN0IG5ld1BvaW50cyA9IGN1cnJlbnRQb2ludHMgKyBwb2ludEFkZGl0aW9uO1xyXG4gIGRpc3BsYXkudGV4dENvbnRlbnQgPSBwb2ludHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJvbGxEaWUoKSB7XHJcbiAgY29uc3Qgcm9sbCA9IGdldFJhbmRvbUludEZyb21SYW5nZShcclxuICAgIGRpY2VQb29sWzBdLFxyXG4gICAgZGljZVBvb2xbZGljZVBvb2wubGVuZ3RoIC0gMV0sXHJcbiAgKTtcclxuICBwb2ludHMgKz0gcm9sbDtcclxufVxyXG5cclxucm9sbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHJvbGxEaWUoKTtcclxuICBkaXNwbGF5UG9pbnRzKCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
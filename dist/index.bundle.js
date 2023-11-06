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

rollButton.addEventListener("click", () => {
  const roll = getRandomIntFromRange(
    dicePool[0],
    dicePool[dicePool.length - 1],
  );
  points += roll;
  displayPoints();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGljZWNyZW1lbnRhbC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1xyXG5cclxubGV0IHBvaW50cyA9IDA7XHJcbmNvbnN0IGRpY2VQb29sID0gWzEsIDIsIDMsIDQsIDUsIDZdO1xyXG5cclxuY29uc3Qgcm9sbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9sbEJ1dHRvblwiKTtcclxuXHJcbmZ1bmN0aW9uIGdldFJhbmRvbUludEZyb21SYW5nZShtaW4sIG1heCkge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5UG9pbnRzKCkge1xyXG4gIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvaW50RGlzcGxheVwiKTtcclxuICAvLyAgIGNvbnN0IGN1cnJlbnRQb2ludHMgPSBOdW1iZXIoZGlzcGxheS50ZXh0Q29udGVudCk7XHJcbiAgLy8gICBjb25zdCBuZXdQb2ludHMgPSBjdXJyZW50UG9pbnRzICsgcG9pbnRBZGRpdGlvbjtcclxuICBkaXNwbGF5LnRleHRDb250ZW50ID0gcG9pbnRzO1xyXG59XHJcblxyXG5yb2xsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3Qgcm9sbCA9IGdldFJhbmRvbUludEZyb21SYW5nZShcclxuICAgIGRpY2VQb29sWzBdLFxyXG4gICAgZGljZVBvb2xbZGljZVBvb2wubGVuZ3RoIC0gMV0sXHJcbiAgKTtcclxuICBwb2ludHMgKz0gcm9sbDtcclxuICBkaXNwbGF5UG9pbnRzKCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
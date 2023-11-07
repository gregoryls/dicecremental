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
  setInterval(() => {
    rollDie();
    displayPoints();
  }, 1000);
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RpY2VjcmVtZW50YWwvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9cclxuXHJcbmxldCBwb2ludHMgPSAwO1xyXG5jb25zdCBkaWNlUG9vbCA9IFsxLCAyLCAzLCA0LCA1LCA2XTtcclxuXHJcbmNvbnN0IHJvbGxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvbGxCdXR0b25cIik7XHJcbmNvbnN0IHRpZXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZW5lcmF0b3JUaWVyMVwiKTtcclxuXHJcbmZ1bmN0aW9uIGdldFJhbmRvbUludEZyb21SYW5nZShtaW4sIG1heCkge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5UG9pbnRzKCkge1xyXG4gIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvaW50RGlzcGxheVwiKTtcclxuICAvLyAgIGNvbnN0IGN1cnJlbnRQb2ludHMgPSBOdW1iZXIoZGlzcGxheS50ZXh0Q29udGVudCk7XHJcbiAgLy8gICBjb25zdCBuZXdQb2ludHMgPSBjdXJyZW50UG9pbnRzICsgcG9pbnRBZGRpdGlvbjtcclxuICBkaXNwbGF5LnRleHRDb250ZW50ID0gcG9pbnRzO1xyXG59XHJcblxyXG5mdW5jdGlvbiByb2xsRGllKCkge1xyXG4gIGNvbnN0IHJvbGwgPSBnZXRSYW5kb21JbnRGcm9tUmFuZ2UoXHJcbiAgICBkaWNlUG9vbFswXSxcclxuICAgIGRpY2VQb29sW2RpY2VQb29sLmxlbmd0aCAtIDFdLFxyXG4gICk7XHJcbiAgcG9pbnRzICs9IHJvbGw7XHJcbn1cclxuXHJcbnJvbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICByb2xsRGllKCk7XHJcbiAgZGlzcGxheVBvaW50cygpO1xyXG59KTtcclxuXHJcbnRpZXIxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgcm9sbERpZSgpO1xyXG4gICAgZGlzcGxheVBvaW50cygpO1xyXG4gIH0sIDEwMDApO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
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

rollButton.addEventListener("click", () => {
  const roll = getRandomIntFromRange(
    dicePool[0],
    dicePool[dicePool.length - 1],
  );
  points += roll;
  console.log(points);
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RpY2VjcmVtZW50YWwvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9cclxuXHJcbmxldCBwb2ludHMgPSAwO1xyXG5jb25zdCBkaWNlUG9vbCA9IFsxLCAyLCAzLCA0LCA1LCA2XTtcclxuXHJcbmNvbnN0IHJvbGxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvbGxCdXR0b25cIik7XHJcblxyXG5mdW5jdGlvbiBnZXRSYW5kb21JbnRGcm9tUmFuZ2UobWluLCBtYXgpIHtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxufVxyXG5cclxucm9sbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IHJvbGwgPSBnZXRSYW5kb21JbnRGcm9tUmFuZ2UoXHJcbiAgICBkaWNlUG9vbFswXSxcclxuICAgIGRpY2VQb29sW2RpY2VQb29sLmxlbmd0aCAtIDFdLFxyXG4gICk7XHJcbiAgcG9pbnRzICs9IHJvbGw7XHJcbiAgY29uc29sZS5sb2cocG9pbnRzKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
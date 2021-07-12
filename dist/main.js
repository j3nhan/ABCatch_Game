/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.querySelector('#canvas');\n  var ctx = canvas.getContext('2d');\n  var leftMove = false;\n  var rightMove = false;\n  var score = 0;\n  var lives = 3;\n  var gameOver = true;\n  document.addEventListener(\"keydown\", keyPressed, false);\n  document.addEventListener(\"keyup\", keyReleased, false);\n\n  function keyPressed(e) {\n    switch (e.keyCode) {\n      case 39:\n        rightMove = true;\n        break;\n\n      case 37:\n        leftMove = true;\n        break;\n\n      case  true && gameOver:\n        playAgain();\n        break;\n\n      default:\n        alert(\"LEFT and RIGHT arrow keys only!\");\n    }\n  }\n\n  function keyReleased(e) {\n    switch (e.keyCode) {\n      case 39:\n        rightMove = false;\n        break;\n\n      case 37:\n        leftMove = false;\n        break;\n    }\n  }\n\n  var player = {\n    size: 30,\n    x: canvas.width - 30 / 2,\n    y: canvas.height - 30,\n    color: \"red\"\n  };\n  var letterImage = new Image();\n  letterImage.src = 'src/images/alphabet.png';\n  var lettersArr = [];\n\n  var Letter = /*#__PURE__*/function () {\n    function Letter() {\n      _classCallCheck(this, Letter);\n\n      this.x = Math.random() * canvas.width;\n      this.y = Math.random() * canvas.height;\n      this.width = 100;\n      this.height = 100;\n    }\n\n    _createClass(Letter, [{\n      key: \"update\",\n      value: function update() {\n        this.x++;\n        this.y++;\n      }\n    }, {\n      key: \"draw\",\n      value: function draw() {\n        ctx.fillRect(this.x, this.y, this.width, this.height);\n      }\n    }]);\n\n    return Letter;\n  }();\n\n  for (var i = 0; i < 26; i++) {\n    lettersArr.push(new Letter());\n  }\n\n  function animate() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    requestAnimationFrame(animate);\n  }\n\n  animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BQkNhdGNoX2dhbWUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsImxlZnRNb3ZlIiwicmlnaHRNb3ZlIiwic2NvcmUiLCJsaXZlcyIsImdhbWVPdmVyIiwia2V5UHJlc3NlZCIsImtleVJlbGVhc2VkIiwiZSIsImtleUNvZGUiLCJwbGF5QWdhaW4iLCJhbGVydCIsInBsYXllciIsInNpemUiLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwiY29sb3IiLCJsZXR0ZXJJbWFnZSIsIkltYWdlIiwic3JjIiwibGV0dGVyc0FyciIsIkxldHRlciIsIk1hdGgiLCJyYW5kb20iLCJmaWxsUmVjdCIsImkiLCJwdXNoIiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaEQsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBLE1BQU1DLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFFQSxNQUFJQyxRQUFRLEdBQUcsS0FBZjtBQUNBLE1BQUlDLFNBQVMsR0FBRyxLQUFoQjtBQUNBLE1BQUlDLEtBQUssR0FBRyxDQUFaO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLENBQVo7QUFDQSxNQUFJQyxRQUFRLEdBQUcsSUFBZjtBQUVBVixVQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDVSxVQUFyQyxFQUFpRCxLQUFqRDtBQUNBWCxVQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DVyxXQUFuQyxFQUFnRCxLQUFoRDs7QUFFQSxXQUFTRCxVQUFULENBQW9CRSxDQUFwQixFQUF1QjtBQUNuQixZQUFRQSxDQUFDLENBQUNDLE9BQVY7QUFDSSxXQUFLLEVBQUw7QUFDSVAsaUJBQVMsR0FBRyxJQUFaO0FBQ0E7O0FBQ0osV0FBSyxFQUFMO0FBQ0lELGdCQUFRLEdBQUcsSUFBWDtBQUNBOztBQUNKLFdBQU0sS0FBRSxJQUFJSSxRQUFaO0FBQ0lLLGlCQUFTO0FBQ1Q7O0FBQ0o7QUFDSUMsYUFBSyxDQUFDLGlDQUFELENBQUw7QUFYUjtBQWFIOztBQUVELFdBQVNKLFdBQVQsQ0FBcUJDLENBQXJCLEVBQXdCO0FBQ3BCLFlBQVFBLENBQUMsQ0FBQ0MsT0FBVjtBQUNJLFdBQUssRUFBTDtBQUNJUCxpQkFBUyxHQUFHLEtBQVo7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSUQsZ0JBQVEsR0FBRyxLQUFYO0FBQ0E7QUFOUjtBQVFIOztBQUVELE1BQUlXLE1BQU0sR0FBRztBQUNUQyxRQUFJLEVBQUUsRUFERztBQUVUQyxLQUFDLEVBQUdqQixNQUFNLENBQUNrQixLQUFQLEdBQWUsS0FBSyxDQUZmO0FBR1RDLEtBQUMsRUFBRW5CLE1BQU0sQ0FBQ29CLE1BQVAsR0FBZ0IsRUFIVjtBQUlUQyxTQUFLLEVBQUU7QUFKRSxHQUFiO0FBUUEsTUFBTUMsV0FBVyxHQUFHLElBQUlDLEtBQUosRUFBcEI7QUFDQUQsYUFBVyxDQUFDRSxHQUFaLEdBQWtCLHlCQUFsQjtBQUVBLE1BQU1DLFVBQVUsR0FBRyxFQUFuQjs7QUFuRGdELE1BcUQxQ0MsTUFyRDBDO0FBc0Q1QyxzQkFBYztBQUFBOztBQUNWLFdBQUtULENBQUwsR0FBU1UsSUFBSSxDQUFDQyxNQUFMLEtBQWdCNUIsTUFBTSxDQUFDa0IsS0FBaEM7QUFDQSxXQUFLQyxDQUFMLEdBQVNRLElBQUksQ0FBQ0MsTUFBTCxLQUFnQjVCLE1BQU0sQ0FBQ29CLE1BQWhDO0FBQ0EsV0FBS0YsS0FBTCxHQUFhLEdBQWI7QUFDQSxXQUFLRSxNQUFMLEdBQWMsR0FBZDtBQUNIOztBQTNEMkM7QUFBQTtBQUFBLGFBNkQ1QyxrQkFBUztBQUNMLGFBQUtILENBQUw7QUFDQSxhQUFLRSxDQUFMO0FBQ0g7QUFoRTJDO0FBQUE7QUFBQSxhQWtFNUMsZ0JBQU87QUFDSGpCLFdBQUcsQ0FBQzJCLFFBQUosQ0FBYSxLQUFLWixDQUFsQixFQUFxQixLQUFLRSxDQUExQixFQUE2QixLQUFLRCxLQUFsQyxFQUF5QyxLQUFLRSxNQUE5QztBQUNIO0FBcEUyQzs7QUFBQTtBQUFBOztBQXVFaEQsT0FBSyxJQUFJVSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQ3pCTCxjQUFVLENBQUNNLElBQVgsQ0FBZ0IsSUFBSUwsTUFBSixFQUFoQjtBQUNIOztBQUVELFdBQVNNLE9BQVQsR0FBbUI7QUFDZjlCLE9BQUcsQ0FBQytCLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CakMsTUFBTSxDQUFDa0IsS0FBM0IsRUFBa0NsQixNQUFNLENBQUNvQixNQUF6QztBQUVBYyx5QkFBcUIsQ0FBQ0YsT0FBRCxDQUFyQjtBQUNIOztBQUVEQSxTQUFPO0FBQ1YsQ0FsRkQiLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbnZhcycpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgbGV0IGxlZnRNb3ZlID0gZmFsc2U7XG4gICAgbGV0IHJpZ2h0TW92ZSA9IGZhbHNlO1xuICAgIGxldCBzY29yZSA9IDA7XG4gICAgbGV0IGxpdmVzID0gMztcbiAgICBsZXQgZ2FtZU92ZXIgPSB0cnVlO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5UHJlc3NlZCwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBrZXlSZWxlYXNlZCwgZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24ga2V5UHJlc3NlZChlKSB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgIHJpZ2h0TW92ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgIGxlZnRNb3ZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgKDMyICYmIGdhbWVPdmVyKTpcbiAgICAgICAgICAgICAgICBwbGF5QWdhaW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJMRUZUIGFuZCBSSUdIVCBhcnJvdyBrZXlzIG9ubHkhXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24ga2V5UmVsZWFzZWQoZSkge1xuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICByaWdodE1vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgbGVmdE1vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBwbGF5ZXIgPSB7XG4gICAgICAgIHNpemU6IDMwLFxuICAgICAgICB4OiAoY2FudmFzLndpZHRoIC0gMzAgLyAyKSxcbiAgICAgICAgeTogY2FudmFzLmhlaWdodCAtIDMwLFxuICAgICAgICBjb2xvcjogXCJyZWRcIlxuICAgIH1cbiAgICBcblxuICAgIGNvbnN0IGxldHRlckltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgbGV0dGVySW1hZ2Uuc3JjID0gJ3NyYy9pbWFnZXMvYWxwaGFiZXQucG5nJztcblxuICAgIGNvbnN0IGxldHRlcnNBcnIgPSBbXTtcblxuICAgIGNsYXNzIExldHRlciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgIHRoaXMueSA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IDEwMDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlKCkge1xuICAgICAgICAgICAgdGhpcy54Kys7XG4gICAgICAgICAgICB0aGlzLnkrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYXcoKSB7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjY7IGkrKykge1xuICAgICAgICBsZXR0ZXJzQXJyLnB1c2gobmV3IExldHRlcigpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKTtcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BQkNhdGNoX2dhbWUvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSIsImZpbGUiOiIuL3NyYy9pbmRleC5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
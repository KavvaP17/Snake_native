/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const GAME_FIELD_WIDTH = 20;
/* harmony export (immutable) */ __webpack_exports__["e"] = GAME_FIELD_WIDTH;

const INITAL_SNAKE_LENGTH = 3;
/* harmony export (immutable) */ __webpack_exports__["f"] = INITAL_SNAKE_LENGTH;

const SNAKE_SPEED = 200;
/* harmony export (immutable) */ __webpack_exports__["g"] = SNAKE_SPEED;


const DIRECTION_RIGHT = 'DIRECTION_RIGHT';
/* harmony export (immutable) */ __webpack_exports__["c"] = DIRECTION_RIGHT;

const DIRECTION_LEFT = 'DIRECTION_LEFT';
/* harmony export (immutable) */ __webpack_exports__["b"] = DIRECTION_LEFT;

const DIRECTION_UP = 'DIRECTION_UP';
/* harmony export (immutable) */ __webpack_exports__["d"] = DIRECTION_UP;

const DIRECTION_DOWN = 'DIRECTION_DOWN';
/* harmony export (immutable) */ __webpack_exports__["a"] = DIRECTION_DOWN;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keyHendling_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initArrayLocation_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__initArraySnake_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isDied_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__snakeGo_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__render_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__renderDie_js__ = __webpack_require__(12);









const state = {
  isStart: false,
  isDied: false,
  score: 0,
  arrayLocation: Object(__WEBPACK_IMPORTED_MODULE_2__initArrayLocation_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_js__["e" /* GAME_FIELD_WIDTH */], __WEBPACK_IMPORTED_MODULE_0__constants_js__["f" /* INITAL_SNAKE_LENGTH */]),
  snakeLocation: Object(__WEBPACK_IMPORTED_MODULE_3__initArraySnake_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__constants_js__["e" /* GAME_FIELD_WIDTH */], __WEBPACK_IMPORTED_MODULE_0__constants_js__["f" /* INITAL_SNAKE_LENGTH */]),
  direction: __WEBPACK_IMPORTED_MODULE_0__constants_js__["c" /* DIRECTION_RIGHT */]
};
window.state = state;
const conteinerGame = document.getElementById('game_container');
const conteinerScore = document.getElementById('game_score');
const containerGameOver = document.getElementById('game_status');
Object(__WEBPACK_IMPORTED_MODULE_6__render_js__["a" /* default */])(window.state, conteinerGame, conteinerScore);

document.addEventListener('keypress', __WEBPACK_IMPORTED_MODULE_1__keyHendling_js__["a" /* default */]);

setInterval(() => {
  if (Object(__WEBPACK_IMPORTED_MODULE_4__isDied_js__["a" /* default */])(window.state.snakeLocation)) {
    window.state.isDied = true;
    window.state.isStart = false;
    Object(__WEBPACK_IMPORTED_MODULE_7__renderDie_js__["a" /* default */])(window.state, containerGameOver);
  }
  if (window.state.isStart) {
    window.state.isDied = false;
    window.state = Object(__WEBPACK_IMPORTED_MODULE_5__snakeGo_js__["a" /* default */])(window.state);
    Object(__WEBPACK_IMPORTED_MODULE_6__render_js__["a" /* default */])(window.state, conteinerGame, conteinerScore);
  }
}, __WEBPACK_IMPORTED_MODULE_0__constants_js__["g" /* SNAKE_SPEED */]);
console.log('good');

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function (e) {
  if (window.state.isStart && !window.state.isDied) {
    switch (e.code) {
      case 'KeyW':
        if (window.state.direction !== __WEBPACK_IMPORTED_MODULE_0__constants_js__["a" /* DIRECTION_DOWN */]) {
          window.state.direction = __WEBPACK_IMPORTED_MODULE_0__constants_js__["d" /* DIRECTION_UP */];
        }
        break;
      case 'KeyS':
        if (window.state.direction !== __WEBPACK_IMPORTED_MODULE_0__constants_js__["d" /* DIRECTION_UP */]) {
          window.state.direction = __WEBPACK_IMPORTED_MODULE_0__constants_js__["a" /* DIRECTION_DOWN */];
        }
        break;
      case 'KeyD':
        if (window.state.direction !== __WEBPACK_IMPORTED_MODULE_0__constants_js__["b" /* DIRECTION_LEFT */]) {
          window.state.direction = __WEBPACK_IMPORTED_MODULE_0__constants_js__["c" /* DIRECTION_RIGHT */];
        }
        break;
      case 'KeyA':
        if (window.state.direction !== __WEBPACK_IMPORTED_MODULE_0__constants_js__["c" /* DIRECTION_RIGHT */]) {
          window.state.direction = __WEBPACK_IMPORTED_MODULE_0__constants_js__["b" /* DIRECTION_LEFT */];
        }
        break;
      default:
        break;
    }
  } else {
    if (e.code === 'Space') {
      window.state.isStart = true;
      window.state.isDied = false;
    }
  }
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initArrayLocation;
function initArrayLocation(fieldWidth, snakeLength) {
  const initArray = [];
  for (let i = 0; i < fieldWidth; i++) {
    initArray[i] = [];
    for (let j = 0; j < fieldWidth; j++) {
      initArray[i][j] = 0;
    }
  }
  //eat
  initArray[~~(Math.random() * fieldWidth / 2)][~~(Math.random() * fieldWidth)] = 1;
  return initArray;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initArraySnake;
function initArraySnake(fieldWidth, snakeLength) {
    const snakeArray = [];
    const snakeXPosition = ~~(fieldWidth / 2 - snakeLength / 2);
    const snakeYPosition = ~~(fieldWidth / 2);
    let i = 0;
    for (let j = snakeXPosition; j < snakeXPosition + snakeLength; j++) {
        snakeArray[i] = { y: snakeYPosition, x: j };
        i++;
    }
    return snakeArray;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isDied;
function isDied(snakeLocation) {
    const head = snakeLocation[snakeLocation.length - 1];
    for (let i = 0; i < snakeLocation.length - 1; i++) {
        if (head.x === snakeLocation[i].x && head.y === snakeLocation[i].y) {
            return true;
        }
    }
    return false;
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = snakeGo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getEat_js__ = __webpack_require__(8);



function snakeGo(state) {
    let newScore = state.score;
    let newarrayLocation = state.arrayLocation.slice();
    let newStateLocation = state.snakeLocation.slice();
    let head = newStateLocation[newStateLocation.length - 1];
    let newPoint;
    if (state.direction === __WEBPACK_IMPORTED_MODULE_0__constants_js__["d" /* DIRECTION_UP */]) {
        newPoint = {
            y: head.y - 1 >= 0 ? head.y - 1 : __WEBPACK_IMPORTED_MODULE_0__constants_js__["e" /* GAME_FIELD_WIDTH */] - head.y - 1,
            x: head.x
        };
    } else if (state.direction === __WEBPACK_IMPORTED_MODULE_0__constants_js__["a" /* DIRECTION_DOWN */]) {
        newPoint = {
            y: head.y + 1 < __WEBPACK_IMPORTED_MODULE_0__constants_js__["e" /* GAME_FIELD_WIDTH */] ? head.y + 1 : head.y + 1 - __WEBPACK_IMPORTED_MODULE_0__constants_js__["e" /* GAME_FIELD_WIDTH */],
            x: head.x
        };
    } else if (state.direction === __WEBPACK_IMPORTED_MODULE_0__constants_js__["c" /* DIRECTION_RIGHT */]) {
        newPoint = {
            y: head.y,
            x: head.x + 1 < __WEBPACK_IMPORTED_MODULE_0__constants_js__["e" /* GAME_FIELD_WIDTH */] ? head.x + 1 : head.x + 1 - __WEBPACK_IMPORTED_MODULE_0__constants_js__["e" /* GAME_FIELD_WIDTH */]
        };
    } else if (state.direction === __WEBPACK_IMPORTED_MODULE_0__constants_js__["b" /* DIRECTION_LEFT */]) {
        newPoint = {
            y: head.y,
            x: head.x - 1 >= 0 ? head.x - 1 : __WEBPACK_IMPORTED_MODULE_0__constants_js__["e" /* GAME_FIELD_WIDTH */] - head.x - 1
        };
    }
    newStateLocation.push(newPoint);
    if (state.arrayLocation[newPoint.y][newPoint.x] === 1) {
        newarrayLocation = Object(__WEBPACK_IMPORTED_MODULE_1__getEat_js__["a" /* default */])(state.arrayLocation, newStateLocation, newPoint);
        newScore++;
    } else {
        newStateLocation.shift();
    }
    return Object.assign({}, state, { score: newScore, arrayLocation: newarrayLocation, snakeLocation: newStateLocation });
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getEat;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(0);


function getEat(arrayLocation, snakeLocation, head) {
    const newArrayLocation = [...arrayLocation];
    newArrayLocation[head.y][head.x] = 0;
    let newX;
    let newY;
    let eatInSnake = true;
    while (eatInSnake) {
        eatInSnake = false;
        newX = ~~(Math.random() * __WEBPACK_IMPORTED_MODULE_0__constants_js__["e" /* GAME_FIELD_WIDTH */]);
        newY = ~~(Math.random() * __WEBPACK_IMPORTED_MODULE_0__constants_js__["e" /* GAME_FIELD_WIDTH */]);
        snakeLocation.forEach(item => {
            if (item.x === newX && item.y === newY) {
                eatInSnake = true;
            }
        });
    }
    newArrayLocation[newY][newX] = 1;
    return newArrayLocation;
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = render;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayLocationToTable__ = __webpack_require__(10);


function render(state, game, score) {
  game.innerHTML = Object(__WEBPACK_IMPORTED_MODULE_0__arrayLocationToTable__["a" /* default */])(state.arrayLocation, state.snakeLocation);
  score.innerHTML = state.score;
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = arrayLocationToTable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isNoSnakePosition_js__ = __webpack_require__(11);


function arrayLocationToTable(arrayLocation, snakeLocation) {
    return arrayLocation.map((item, indexRow) => {
        return '<tr>' + item.map((field, indexCol) => {
            return '<td>' + (Object(__WEBPACK_IMPORTED_MODULE_0__isNoSnakePosition_js__["a" /* default */])(snakeLocation, indexRow, indexCol) && field !== 1 ? '' : '<div class="snake"></div>') + '</td>';
        }).join('') + '</tr>';
    }).join('');
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isNoSnakePosition;
function isNoSnakePosition(snakeLocation, Row, Col) {
    let res = true;
    snakeLocation.forEach(item => {
        if (item.x === Col && item.y === Row) {
            res = false;
        }
    });
    return res;
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = render;
function render(state, gameStatus) {
  gameStatus.innerHTML = 'GAME OVER! Your result: ' + state.score;
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
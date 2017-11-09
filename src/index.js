import {GAME_FIELD_WIDTH, INITAL_SNAKE_LENGTH, SNAKE_SPEED, DIRECTION_RIGHT, DIRECTION_LEFT, DIRECTION_UP,
        DIRECTION_DOWN,} from './constants.js';
import keyHendling from './keyHendling.js';
import initArrayLocation from './initArrayLocation.js';
import initArraySnake from './initArraySnake.js';
import isDied from './isDied.js';
import snakeGo from './snakeGo.js';
import render from './render.js';
import renderDie from './renderDie.js';

let state = {
	isStart: false,
	isDied: false,
	score: 0,
	arrayLocation: initArrayLocation(GAME_FIELD_WIDTH, INITAL_SNAKE_LENGTH),
	snakeLocation: initArraySnake(GAME_FIELD_WIDTH, INITAL_SNAKE_LENGTH),
	direction: DIRECTION_RIGHT
}

const conteinerGame = document.getElementById('game_container');
const conteinerScore = document.getElementById('game_score');
const containerGameOver = document.getElementById('game_status');
render(state, conteinerGame, conteinerScore);
window.state = state;
document.addEventListener('keypress', keyHendling);

setInterval(()=>{
  if (isDied(state.snakeLocation)){
      state.isDied = true;
      state.isStart = false;
      renderDie(state, containerGameOver);
  }
  if (state.isStart) {
	  state.isDied = false;
	  state = snakeGo(state);
	  render(state, conteinerGame, conteinerScore);
  }
	window.state = state;
},SNAKE_SPEED);

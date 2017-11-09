import {DIRECTION_RIGHT, DIRECTION_LEFT, DIRECTION_UP, DIRECTION_DOWN,} from './constants.js';

export default function (e){
  if (window.state.isStart && !window.state.isDied){
    switch (e.code) {
      case 'KeyW':
        if (window.state.direction !== DIRECTION_DOWN){
          window.state.direction = DIRECTION_UP;
        }
        break;
      case 'KeyS':
        if (window.state.direction !== DIRECTION_UP){
          window.state.direction = DIRECTION_DOWN;
        }
        break;
      case 'KeyD':
        if (window.state.direction !== DIRECTION_LEFT){
          window.state.direction = DIRECTION_RIGHT;
        }
        break;
      case 'KeyA':
        if (window.state.direction !== DIRECTION_RIGHT){
          window.state.direction = DIRECTION_LEFT;
        }
        break;
      default:
        break;
    }
  } else{
    if (e.code === 'Space'){
      window.state.isStart = true;
      window.state.isDied = false;
    }
  }
}

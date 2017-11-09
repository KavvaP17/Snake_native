import {GAME_FIELD_WIDTH,DIRECTION_RIGHT, DIRECTION_LEFT, DIRECTION_UP, DIRECTION_DOWN,} from './constants.js';
import getEat from './getEat.js';

export default function snakeGo(state){
    let newScore = state.score;
    let newarrayLocation = state.arrayLocation.slice();
    let newStateLocation = state.snakeLocation.slice();
    let head = newStateLocation[newStateLocation.length-1];
    let newPoint;
    if (state.direction === DIRECTION_UP){
        newPoint = {
            y: head.y-1>=0? head.y-1 : GAME_FIELD_WIDTH-head.y-1,
            x: head.x
        }
    }
    else if (state.direction === DIRECTION_DOWN){
        newPoint = {
            y: head.y+1<GAME_FIELD_WIDTH? head.y+1 : head.y+1-GAME_FIELD_WIDTH,
            x: head.x
        }
    }
    else if (state.direction === DIRECTION_RIGHT){
        newPoint = {
            y: head.y,
            x: head.x+1<GAME_FIELD_WIDTH? head.x+1 : head.x+1-GAME_FIELD_WIDTH
        }
    }
    else if (state.direction === DIRECTION_LEFT){
        newPoint = {
            y: head.y,
            x: head.x-1>=0? head.x-1 : GAME_FIELD_WIDTH-head.x-1
        }
    }
    newStateLocation.push(newPoint);
    if (state.arrayLocation[newPoint.y][newPoint.x] === 1){
        newarrayLocation = getEat(state.arrayLocation, newStateLocation, newPoint);
        newScore++;
    } else{
        newStateLocation.shift();
    }
    return Object.assign({},state,{score: newScore, arrayLocation: newarrayLocation, snakeLocation: newStateLocation});
}

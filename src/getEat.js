import {GAME_FIELD_WIDTH} from './constants.js';

export default function getEat(arrayLocation, snakeLocation, head){
    const newArrayLocation = [...arrayLocation];
    newArrayLocation[head.y][head.x] = 0;
    let newX;
    let newY;
    let eatInSnake = true;
    while (eatInSnake){
        eatInSnake = false;
        newX = ~~(Math.random()*GAME_FIELD_WIDTH);
        newY = ~~(Math.random()*GAME_FIELD_WIDTH);
        snakeLocation.forEach((item)=>{
            if (item.x === newX && item.y ===newY){
                eatInSnake = true;
            }
        })
    }
    newArrayLocation[newY][newX] = 1;
    return newArrayLocation;
}

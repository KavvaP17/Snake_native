export default function isDied(snakeLocation){
    const head = snakeLocation[snakeLocation.length-1];
    for (let i=0; i<snakeLocation.length-1; i++){
        if (head.x === snakeLocation[i].x && head.y === snakeLocation[i].y){
            return true;
        }
    }
    return false;
}

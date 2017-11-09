export default function initArraySnake(fieldWidth, snakeLength){
    const snakeArray = [];
    const snakeXPosition = ~~(fieldWidth/2-snakeLength/2);
    const snakeYPosition = ~~(fieldWidth/2);
    let i=0;
    for (let j = snakeXPosition; j < snakeXPosition+snakeLength; j++){
		snakeArray[i] = {y: snakeYPosition, x: j };
		i++;
    }
    return snakeArray;
}

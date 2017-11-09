export default function initArrayLocation(fieldWidth, snakeLength){
 	const initArray = [];
	for (let i = 0; i < fieldWidth; i++) {
		initArray[i] = [];
		for (let j = 0; j < fieldWidth; j++) {
			initArray[i][j] = 0;
		}
	}
  //eat
  	initArray[~~(Math.random()*fieldWidth/2)][~~(Math.random()*fieldWidth)] = 1;
	
  	return initArray;
}

export default function render(state, gameStatus){
	gameStatus.innerHTML = 'GAME OVER! Your result: '+ state.score;
}

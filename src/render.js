import arrayLocationToTable from './arrayLocationToTable';

export default function render(state, game, score){
	game.innerHTML = (arrayLocationToTable(state.arrayLocation, state.snakeLocation));
	score.innerHTML = state.score;
}

import isNoSnakePosition from './isNoSnakePosition.js';

export default function arrayLocationToTable(arrayLocation, snakeLocation){
    return arrayLocation.map((item, indexRow)=>{
        return '<tr>'+(item.map((field, indexCol)=>{
            return '<td>'+((isNoSnakePosition(snakeLocation,indexRow,indexCol) && field !== 1) ? '' : '<div class="snake"></div>' )+'</td>';
        })).join('')+'</tr>';
    }).join('');
}

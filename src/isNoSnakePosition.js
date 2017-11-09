export default function isNoSnakePosition(snakeLocation, Row, Col){
    let res = true;
    snakeLocation.forEach((item)=>{
        if (item.x === Col && item.y === Row){
            res = false;
        }
    })
    return res;
}

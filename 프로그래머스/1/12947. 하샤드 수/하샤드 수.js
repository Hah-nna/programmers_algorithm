

function solution(x) {
    let sum = 0;
    const originX = x;
    while(x > 0){
        sum += x % 10;
        x = Math.floor(x / 10)
    } 

    return originX % sum === 0 ? true : false;
}

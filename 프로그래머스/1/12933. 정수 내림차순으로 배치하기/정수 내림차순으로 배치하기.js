function solution(n) {
    var answer = 0;
    let a = (n+"").split('').map((val) => +val).sort((x,y) => y - x).map((val) => {
        answer += val+''
    })
    return parseInt(answer)
}

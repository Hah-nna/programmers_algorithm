function solution(arr, commands) {
    var answer = [];
    const length = commands.length
    
    for(let i = 0; i < length; i++) {
            let cutArr = arr.slice((commands[i][0] - 1), commands[i][1])
            let sorted = cutArr.sort((x,y) => x - y)
            answer.push(sorted[commands[i][2] - 1])
    }
    return answer
}
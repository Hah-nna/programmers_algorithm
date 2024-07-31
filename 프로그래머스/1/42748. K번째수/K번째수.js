// for문으로 풀어봄
// function solution(arr, commands) {
//     var answer = [];
//     const length = commands.length
    
//     for(let i = 0; i < length; i++) {
//             let cutArr = arr.slice((commands[i][0] - 1), commands[i][1])
//             let sorted = cutArr.sort((x,y) => x - y)
//             answer.push(sorted[commands[i][2] - 1])
//     }
//     return answer
// }

// 디스트럭처링을 사용해 풀기
function solution(arr, commands) {
    return commands.map(([start, end, k]) => {
        const sliced = arr.slice(start - 1, end);
        const sorted = sliced.sort((a, b) => a - b);
        return sorted[k - 1];
    });
}


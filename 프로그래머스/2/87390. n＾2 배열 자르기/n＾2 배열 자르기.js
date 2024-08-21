// function solution(n, left, right) {
//     var answer = [];
   

//     for(let i = 0; i < n; i++) {
//         for(let j = 0; j < n; j++) {
//             let max = Math.max(i, j)
//             answer.push(max + 1)
//         }
//     }   
//     return answer.slice(left, right + 1);
// }

function solution (n, left, right) {
    let answer = []
    
    for(let i = left; i <= right; i++) {
        let row = Math.floor(i / n);
        let col =  i % n;   
        answer.push(Math.max(row, col) + 1)
    }
    return answer
}
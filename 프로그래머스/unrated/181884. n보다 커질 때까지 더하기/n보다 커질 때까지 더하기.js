function solution(numbers, n) {
//     let answer = 0;
//     let idx = 0
    
//   while(answer <= n) {
//     answer += numbers[idx++]
//   }
//     return answer
    
    return numbers.reduce((acc, cur, idx) => {
        return acc <= n ? acc + cur : acc
    })
}
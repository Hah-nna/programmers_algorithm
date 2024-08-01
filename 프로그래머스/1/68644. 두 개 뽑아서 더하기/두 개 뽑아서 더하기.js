// function solution(numbers) {
//     var answer = [];
//     for(let i = 0; i <= numbers.length - 2; i++) {
//         for(let j = i + 1; j < numbers.length; j++) {
//             let sum = (numbers[i] + numbers[j])
//             answer.includes(sum) ? '' : answer.push(sum)
//         }
//     }
//     return answer.sort((x,y) => x - y)
// }

function solution(numbers) {
    var temp = [];
    for(let i = 0; i <= numbers.length - 2; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            let sum = (numbers[i] + numbers[j])
            temp.push(sum)
        }
    }
    
    let answer = [...new Set(temp)]
    return answer.sort((x,y) => x - y)
}
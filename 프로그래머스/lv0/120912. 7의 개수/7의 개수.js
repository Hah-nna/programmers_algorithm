// function solution(array) {
//     var answer = 0;
//     let a = array.toString()
//     for(let item of a) {
//         if(item.includes(7)){
//             answer += 1
//         } else {
//             answer
//         }
//     }
//     return answer
// }

function solution(array) {
    var answer = 0;
    return array.join('').split('7').length - 1
}
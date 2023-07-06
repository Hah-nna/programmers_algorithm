
function solution(num_str) {
    let answer = 0;
    
    [...num_str].map((x) => answer += Number(x))
    
    return answer;
}


// function solution(num_str) {
//     var a = num_str.split("").map((x) => +x)
//     let b = 0;
    
//     for(num of a) {
//         b += num;    
//     }
//     return b
// }
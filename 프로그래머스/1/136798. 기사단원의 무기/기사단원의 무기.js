function solution(number, limit, power) {
    var answer = 0;
    for(let i = 1; i <= number; i++) {
        let sum = 0;
        for(let j = 1; j*j <= i; j++) {
            if(i % j === 0) {
                if(j*j === i) sum += 1
                else sum += 2
            }            
        }
        
        answer += sum > limit ? power : sum
    }
    
   
    return answer
}

// function solution(number, limit, power) {
//     let answer = 0;
    
//     for (let i = 1; i <= number; i++) {
//         let count = 0;
//         for (let j = 1; j * j <= i; j++) {
//             if (i % j === 0) {
//                 if (j * j === i) {
//                     count++;
//                 } else {
//                     count += 2;
//                 }
//             }
//             if (count > limit) {
//                 count = power;
//                 break;
//             }
//         }
//         answer += count 
//     }
    
//     return answer;
// }
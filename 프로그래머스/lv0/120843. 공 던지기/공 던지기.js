// function solution(numbers, k) {
//     let answer = []
//     let count = 1;
//     let temp = 0;
   
//     while(count !== k) {
//        for(let i = 0; i < numbers.length; i++) {      
//             answer.push(numbers.shift());
//             temp++;

//            if(temp % 2 === 0) {
//             answer.push(numbers.shift());
//             count++
//             temp = 0;   
//            }
                
//            }
           
//        }
//     return count
//     }
    
   
       
    
    function solution(numbers, k) {
    let answer = []
    let idx = 0;
        
    while(answer.length < k) {
       answer.push(numbers[idx])
        idx = (idx + 2) % numbers.length
           console.log(idx, "idx2")
       }
    return answer[k-1]
    }
    
   
       
    
    
    
    

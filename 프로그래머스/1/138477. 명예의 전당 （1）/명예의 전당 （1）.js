function solution(k, score) {
    let arr = []
    let result = []
    
    for(let i = 0; i < score.length; i++) {
        arr.push(score[i])
        
        arr.sort((x,y) => y - x)
        
        if(arr.length > k) {
            arr.pop()
        }
        
        result.push(arr.at(-1))
    }
//     for(let i = 0; i < score.length; i++) {
//         if(answer.length < k) {
//            answer.push(score[i])
//            min.push(Math.min(...answer))
            
//         }
        
//         answer.sort((x,y) => y - x)
        
//         if(score[i-1] >= answer[k-1]) {
//             min.push(answer[k-1])
//             console.log(min)
//             answer.pop()
//             answer.push(score[i])
//         } 
        
        
//     } 
    
    return result
}
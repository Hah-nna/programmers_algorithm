function solution(str, n) {
    let arr = [...str]
    var answer = [];
   
        while(arr.length !== 0){
            let sliced = arr.splice(0, n).join('')
            answer.push(sliced)      
        }
     
        
    
    return answer
}
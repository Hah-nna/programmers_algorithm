function solution(s){
    let arr = []
    // ( <-면 arr에 푸쉬, 아니면 pop
    // arr.length가 0이면 트루 아니면 펄스
    
    for(let i of s) {
        if(i === "(") arr.push(i)
        else {
         if (arr.length === 0) return false;
         else arr.pop()     
        }
        
    }
    return arr.length === 0 ? true : false
}
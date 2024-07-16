function solution(s){
    let arr = []
    // ( <-면 arr에 푸쉬, 아니면 pop
    // arr.length가 0이면 트루 아니면 false
    // 근데 '('가 아니고(현재 문자가 ")"라는 뜻) arr.length가 0이라면 짝이 맞지 않으므로 false리턴
    
    for(let i of s) {
        if(i === "(") arr.push(i)
        else {
         if (arr.length === 0) return false;
         else arr.pop()     
        }
        
    }
    return arr.length === 0 ? true : false
}
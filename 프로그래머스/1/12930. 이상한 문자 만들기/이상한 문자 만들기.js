function solution(s) {
    
    var answer = '';
    // 각 요소별 0번째부터 짝수 -> 대문자 / 홀수 -> 소문자
    let arr = s.split(' ');
    
    for(let i = 0; i < arr.length; i++) {
        let word = ''
        for(let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j])
            if(j === 0 || j % 2 === 0){
             word += arr[i][j].toUpperCase()    
            } else {
             word += arr[i][j].toLowerCase()    
            }
        }
        answer += word + ' '
    }
    return answer.slice(0, -1)
}
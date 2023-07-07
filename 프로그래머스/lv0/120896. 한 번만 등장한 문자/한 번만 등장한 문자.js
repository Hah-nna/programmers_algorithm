function solution(s) {
    var answer = [];
    
    for(let i = 0; i < s.length; i++) {
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
            answer.push(s[i])
        }
            
    }
    return answer.sort().join('')
}

// s의 문자열 각각의 첫 번째 인덱스와 마지막 인덱스를 비교함
// 인덱스가 같으면 리턴, 아니면 패스
// 바이너리 서치 배울 때 본 거 같은데..
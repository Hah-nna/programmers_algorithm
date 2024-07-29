function solution(s) {
    // 객체를 이용한 방법
    var answer = [];
    let lastNum = {}
    
    for(let i = 0; i < s.length; i++) {
        let char = s[i]
    lastNum[char] === undefined ? answer.push(-1) : answer.push(i - lastNum[char])
        
        lastNum[char] = i
    }
    
    return answer
    }
    
    


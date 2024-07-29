function solution(s) {
    var answer = [];
    let lastNum = {}
    
    for(let i = 0; i < s.length; i++) {
        let char = s[i]
        if(lastNum[char] === undefined) {
            answer.push(-1)
        } else {
            answer.push(i - lastNum[char])
        }
        
        lastNum[char] = i
    }
    
    return answer
    }
    
    


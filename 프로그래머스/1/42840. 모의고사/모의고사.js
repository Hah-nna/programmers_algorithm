function solution(answers) {
    var answer = [0,0,0];
    
    const m1 = [1, 2, 3, 4, 5]
    const m2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const m3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    const firstLen = m1.length
    const secondLen = m2.length
    const thirdLen = m3.length
    
    for(let i = 0; i < answers.length; i++) {
        const fIdx = i % firstLen
        const sIdx = i % secondLen
        const tIdx = i % thirdLen
                
        if(answers[i] === m1[fIdx]) answer[0]++
        if(answers[i] === m2[sIdx]) answer[1]++
        if(answers[i] === m3[tIdx]) answer[2]++  
        // console.log(answer[2])
        
        
    }
    const max = Math.max(...answer) 
   return answer.reduce((acc, cur, idx) => {
       if(cur === max) acc.push(idx + 1)
       return acc
   }, [])
}
function solution(answers) {
    var answer = [0,0,0];
    
    const firstAnswer = [1, 2, 3, 4, 5]
    const secondAnswer = [2, 1, 2, 3, 2, 4, 2, 5]
    const thirdAnswer = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    const firstLen = firstAnswer.length
    const secondLen = secondAnswer.length
    const thirdLen = thirdAnswer.length
    
    for(let i = 0; i < answers.length; i++) {
        const fIdx = i % firstLen
        const sIdx = i % secondLen
        const tIdx = i % thirdLen
                
        if(answers[i] === firstAnswer[fIdx]) answer[0]++
        if(answers[i] === secondAnswer[sIdx]) answer[1]++
        if(answers[i] === thirdAnswer[tIdx]) answer[2]++  
        // console.log(answer[2])
        
        
    }
    const max = Math.max(...answer) 
   return answer.reduce((acc, cur, idx) => {
       if(cur === max) acc.push(idx + 1)
       return acc
   }, [])
}
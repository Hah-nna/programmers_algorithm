
const getDayUntilDone = (num, speed) => {
    return Math.ceil((100 - num) / speed)
}

function solution(p, s) {
 const days = p.map((val, idx) => getDayUntilDone(val, s[idx]))   
 let answer = []
 let maxDay = days[0]
 let count = 0;

 for(let i = 0; i < days.length; i++) {
    if(days[i] <= maxDay) {        
        count++
    } else {
        answer.push(count)
        count = 1;
        maxDay = days[i]
    }   
    
    
 }
  if(count > 0) answer.push(count)
 return answer
}
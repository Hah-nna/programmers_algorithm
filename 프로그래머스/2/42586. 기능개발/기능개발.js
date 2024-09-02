const getDayUntilCompleted = (num, speedsNum) => {
  return Math.ceil((100 - num ) / speedsNum)
}

function solution(progresses, speeds) {
 var answer = [];
 const dayRequired = progresses.map((val, idx) => getDayUntilCompleted(val, speeds[idx]))

let maxDay = dayRequired[0]

// [7 3 9]
// [5,10,1,1,20,1]

let point = 0

for(let i = 0; i < dayRequired.length; i++) {
  if(dayRequired[i] <= maxDay) {
     point++
  } else {
      answer.push(point)
      maxDay = dayRequired[i]
      point = 1
  }
    
   
     
}
      if (point > 0) {
    answer.push(point);
  }
    
    return answer
}
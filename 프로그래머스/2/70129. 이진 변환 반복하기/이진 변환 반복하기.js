function solution(s) {
    let answer = [0,0]
    
    // 0을 삭제함
    // 0을 삭제한 문자열의 길이를 2진법으로 바꿈
    // 다시 0을 삭제함
    // s.length === 1이면 break and return answer 
    let num = s
    let length = 0
    while(num !== '1') {
      let one = num.split('').filter((val) => {
          if(val === '0') answer[1]++
          return val === '1'
      });
        
      length = one.length
      num = Number(length).toString(2)
      answer[0]++  
        
        console.log("filterArr", one)
        console.log('num', num)
        console.log('length', length)
        console.log(answer)
        
    }
    
        
    
    return answer
}
function solution(arr) {
    var answer = arr.map((val, idx) => {
        // 50 >= val && val % 2 === 0 -> val / 2
        // 50 < val && val % 2 !== 0 -> val * 2
        // 나머지 경우는 바꾸지 x
        
        if(val >= 50 && val % 2 === 0) {
           return  val / 2
        } 
        if(val < 50 && val % 2 !== 0) {
           return val * 2
        }
       return  val
    })
    return answer;
}
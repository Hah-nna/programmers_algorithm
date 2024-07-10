function solution(num) {
    var count = 0;
    
    while(num !== 1) {
        // 짝수 판별
        // 짝수라면 나누기 2
        // 짝수가 아니라면 * 3 + 1
        // 만약 num = 1 => 0
        // count >= 500 => -1
        
        if(num === 1) return 0
        if(count >= 500) return -1
        
        if(num % 2 === 0) {
            num = num / 2
            count++
        } else {
            num = (num * 3) + 1
            count++
        }
    }
    return count
}
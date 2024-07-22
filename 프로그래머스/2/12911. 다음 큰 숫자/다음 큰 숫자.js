function solution(n) {
    // n에서 1이 몇개 있는지 체크
    // n + 1의 숫자를 이진법으로 변환
    // 변환한 숫자에서 1이 몇개나 있는지 체크
    // 만약 같다면 break
    // 아니라면 숫자++
    
    function countOne(x) {
        return x.toString(2).split('0').join('').length 
    }
    
    const m = countOne(n)
    let next = n + 1
    
    while(m !== countOne(next)) {
        next++
    }
    
    return next
}
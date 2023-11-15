function solution(n) {
    let answer = 0
    // n이 홀수면
    // 엔 이하의 홀수인 모든 양의 정수의 합 리턴
    if(n % 2 !== 0) {
        for(let i = n; i > 0; i--) {
            if(i % 2 !== 0) answer += i
        }
    } else {
        for(let j = n; j > 0; j--) {
            if(j % 2 === 0) answer += j**2
        }
    }
    return answer
    
    // n이 짝수라면
    // 엔 이하의 짝수인 모든 양의 정수 제곱의 합 리턴
}
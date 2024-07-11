function solution(n) {
    var answer = '';

    
    // for(let i = 1; i <= n; i++) {
    //     i % 2 !== 0 ? answer += '수' : answer += '박'
    // }
    // return answer;
     
    return '수박'.repeat(n/2) + (n % 2 !== 0 ? '수' : '')
}
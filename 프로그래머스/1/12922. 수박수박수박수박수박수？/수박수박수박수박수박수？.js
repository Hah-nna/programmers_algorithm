function solution(n) {
    var answer = '';
    // 1 2 3 4
    // 수 박 수 박
    // 3 = (2 * 1) + 1
    // 4 = (2 * 1) + 2
    // 5 = (2 * 1) + 3
    // 6 = (2 * 1) + 4
    // 수, 박 문자열 만들기
    // i % 2 !== 0 ? answer += 수 : answer += 'qkr'
    for(let i = 1; i <= n; i++) {
        i % 2 !== 0 ? answer += '수' : answer += '박'
    }
    return answer;
}
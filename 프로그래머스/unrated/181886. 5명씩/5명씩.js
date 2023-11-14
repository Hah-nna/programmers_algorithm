function solution(names) {
    var answer = [];
    // 0 5 length - 1
    for(let i = 0; i < names.length; i+=5) {
        answer.push(names[i])
    }
    return answer;
}
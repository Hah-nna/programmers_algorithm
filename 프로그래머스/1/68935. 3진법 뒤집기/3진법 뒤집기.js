function solution(n) {
    var answer = 0;
    let num = n.toString(3).split('').reverse().join('')
    return parseInt(num, 3)
}
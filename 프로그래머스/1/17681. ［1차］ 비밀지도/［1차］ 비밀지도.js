function solution(n, arr1, arr2) {
    var answer = [];
    // 각 arr1[i] arr2[i]를 이진수로 변경
    // arr1[i][j] arr2[i][j]
    // 둘다 1이면 str += "#"
    // 하나라도 0이면 str += " "(공백)
    // j 루프 끝나면 answer.push(str)
    for(let i = 0; i < n; i++) {
        let arr11 = arr1[i].toString(2)
        let arr22 = arr2[i].toString(2)
        let str = ''
        for(let j = 0; j <= n; j++) {
           let binary1 = arr11.padStart(n, "0")
           let binary2 = arr22.padStart(n, "0")
           
           if(binary1[j] === '1' || binary2[j] === '1') {
               str += '#'
           } else if(binary1[j] === '0' && binary2[j] === '0') {
               str += ' '
           }
        }
        answer.push(str)
    }
    return answer;
}
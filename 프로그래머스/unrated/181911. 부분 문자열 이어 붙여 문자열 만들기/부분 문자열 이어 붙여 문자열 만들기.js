function solution(my_strings, parts) {
    let answer = ''
   for(let i = 0; i < parts.length; i++) {
       
       for(let j = 0; j < 1; j++) {
           // my_strings[i]의 인덱스 s부터 e까지 자른 거
           let cutStr = my_strings[i].slice(+parts[i][0], +parts[i][1]+1)
           // console.log(+parts[i][0], +parts[i][1], "idx")
           console.log(cutStr, 'cut')
           answer += cutStr
       }
   }
    return answer
}
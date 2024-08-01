// function solution(s) {
//     const num = {
//         "zero" : 0 ,
//         'one' : 1,
//         'two' : 2 ,
//         'three' :  3,
//         'four' : 4,
//         'five' : 5,
//         'six' : 6,
//         'seven' : 7,
//         'eight' : 8,
//         'nine' : 9,
//     }
    
//     var answer = ''
//     let word = ''
    
    
//     for(let i = 0; i < s.length; i++) {
//         let str = s[i]
//         if(isNaN(str)) {
//             word += str
            
//             if(num[word] !== undefined) {
//                 // num['zero'] = 0
//                 // 0은 false로 인식하기 때문에 
//                 // if(num[word]) = false가 됨 -> 제대로 숫자로 변환되지 x
//                 // 이를 방지하기 위해 undefined인지 체크해서 객체의 키가 있는지를 확인
                
//                 answer += num[word]
//                 word =''
//             }
//         } else {
//             answer += str
//         }
//     }
    
    
//     return +answer
// }

function solution(s) {
    const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let answer = s
    
    for(let i = 0; i < num.length; i++) {
        let arr = answer.split(num[i])
        answer = arr.join(i)
    }
    return Number(answer)
}
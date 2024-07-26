// function solution(s)
// 정규식을 이용해서 풀어보려함
// 근데 몇몇 케이스는 통과하지 못함
// {
//     const regexp = /([a-z])\1/g
    
//    let answer = s.replaceAll(regexp, '')

//     return answer.length === 2 ? 1 : 0
// }

function solution(s) {
    const stack = []
    // 스택이 비어있거나 현재 문자열이 스택의 마지막이랑 같으면 pop
    // 스택의 마지막이랑 현재 문자열이 같지 않으면 push
    // 일단 스택 봐봐
    
    for(let str of s) {
        if(stack.at(-1) === str) {
            stack.pop()
        } else {
            stack.push(str)
        }
    }
   
    return stack.length !== 0 ? 0 : 1
}
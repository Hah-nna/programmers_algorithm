function solution(n) {
//     function f(num) {
//         if(num === 0 || num === 1) return num
//         return f(num-2) + f(num - 1)
//     }
    
//     let answer = f(n)
//     return answer % 1234567
    if(n <= 1) return n;
    
    let a = 0
    let b = 1
    for(let i = 2; i <= n; i++) {
        let c = (a + b) % 1234567
        a = b
        b = c
    }
    return b
}
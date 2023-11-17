function solution(n) {
    let a = []
    
    a.push(n)
    
    while(n !== 1) {
        if(n % 2 === 0) {
            n = n / 2
            a.push(n)
        } else {
            n = 3 * n + 1
            a.push(n)
        }
    }
    return a
}
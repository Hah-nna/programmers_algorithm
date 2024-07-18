function solution(t, p) {
    var answer = 0;
    const pLength = p.length 
    const tLength = t.length
   // i = 0 <- i 는 length - p.length, j = 0 < p.length(3) + 0
    // 3 1 4
    // i = 1, j = 1 < p.length(3) + 1 = 4
    // 3 1 4 1 5 9 2
    // 0 1 2 3 4 5 6
    // 1 4 1
    // i = 2; j = 2; j = 1 < p.length(3) + 2(i) = 5
    // 3 1 4 1 5 9 2
    // 0 1 2 3 4 5 6
    //     4 1 5
    // i = 3; j = 3; j = 1 < p.length(3) + 3(i) = 6
    // 3 1 4 1 5 9 2
    // 0 1 2 3 4 5 6
    //       1 5 9
    // i = 4; j = 4; j = 1 < p.length(3) + 4(i) = 7
    // 3 1 4 1 5 9 2
    // 0 1 2 3 4 5 6
    //         4 5 6
    
    let count = 0;
    for(let i = 0; i <= tLength - pLength; i++) {
        let num = t.slice(i, i + pLength)
        if(num <= p) count++
    }
    
    return count
}
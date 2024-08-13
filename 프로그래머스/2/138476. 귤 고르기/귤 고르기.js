function solution(k, tangerine) {
    var count = 0
    let basket = new Map()
    
    // for(let i = 0; i < tangerine.length; i++) {
    //     if(!basket.has(tangerine[i])) {
    //         // map에 없으면
    //        basket.set(tangerine[i], 1) 
    //     } else {
    //         // map에 있다면
    //     let value = basket.get(tangerine[i])    
    //     basket.set(tangerine[i], value + 1)    
    //     } 
    // }
    for(let i of tangerine) {
        basket.set(i, (basket.get(i) || 0) + 1)
    }
    

    const sortedCounts = Array.from(basket.values()).sort((a, b) => b - a);
    
    // 최소값을 리턴해야하니까 큰 수터 더해봄
    let sum = 0
    for(let value of sortedCounts) {
        sum += value
        count++
        if(sum >= k) break;
    }
    
    return count;
}
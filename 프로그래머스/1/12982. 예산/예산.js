function solution(d, budget) {
   d.sort((x,y) => x - y) 
   let count = 0;
    for(let i = 0; i < d.length; i++) {
        budget -= d[i]
        if(budget > 0) count++
        else if(budget === 0) {
            count++
            return count
        } else if(budget < 0) break;
    }
    
    
    return count
}
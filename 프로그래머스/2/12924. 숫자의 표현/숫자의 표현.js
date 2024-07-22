function solution(n) {
    let count = 1;
    let start = 1
    let end = 1
    let sum = 1;
    
    while(start < n / 2) {
        // 1
        if(sum < n) {
         end++
        sum += end   
            // 2 
            // 1 + 2 = 3
            // 3 + 3 = 6
            // 6 + 4 = 10
            // 10 + 5 = 15
            
            // sum = 2
            // 2 + 3 = 5
            // 5 + 4 = 9
            // 9 + 5 = 14
            // 14 + 6 = 20
            
        } else if(sum > n) {
            start++
            sum = start
            end = start
            // 3
            // sum = 3
            // end = 
        } 
        if(sum === n) {
            count++
            start++
            sum = start
            end = start
            // count = 2
            // start = 2
            // sum = 2
            // end = 3
        }
    }
    
       
    return count
}
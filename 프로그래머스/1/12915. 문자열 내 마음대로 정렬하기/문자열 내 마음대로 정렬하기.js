function solution(strings, n) {
    var answer = [];
    // for문 돌면서 sort((strings[i][n], strings[i+1][n]) => {
    // strings[i][n] > strings[i+1][n] return -1
    // strings[i][n] < strings[i+1][n] return 1
    // strings[i][n] === strings[i+1][n]
    // strings[i][n+1] > strings[i+1][n+1] return -1
    // strings[i][n+1] > strings[i+1][n+1] return 1
//} 
    return strings.sort((a,b) => {
        if(a[n] > b[n]) return 1
        if(a[n] < b[n]) return -1
        
        if(a[n] === b[n]) {
            if(a > b) return 1
            else if(a < b) return -1
        // return 0    
        }
        
    })
    
    }
    

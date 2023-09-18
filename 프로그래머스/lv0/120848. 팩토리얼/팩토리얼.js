function solution(n) {
    var i = 1;
    let answer = 1;
    
    while(answer <= n) {
        i++
        answer *= i
    }
    
    // for(let i = 1; i < n; i++) {
    //     num *= i
    //     if(num <= n) answer = i
    // }
   return i - 1
}



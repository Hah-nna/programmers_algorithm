function solution(n) {
//     let count = 1;
//     let start = 1
//     let end = 1
//     let sum = 1;
    
//     while(start < n / 2) {
//         if(sum < n) {
//          end++
//         sum += end    
//         } else if(sum > n) {
//             start++
//             sum = start
//             end = start
//         } 
//         if(sum === n) {
//             count++
//             start++
//             sum = start
//             end = start
//         }
//     }
    
       
//     return count
      var answer = 0;
    for (var i = 1; i <= n; i++) {
        if ((n % i == 0) && (i % 2 == 1)) {
            answer++;
        }
    }
    return answer;

}
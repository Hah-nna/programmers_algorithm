function solution(n, arr1, arr2) {
    var answer = [];
    
    for(let i = 0; i < n; i++) {
        let binary1 = arr1[i].toString(2).padStart(n, "0");
        let binary2 = arr2[i].toString(2).padStart(n, "0");
        let str = '';
        
        for(let j = 0; j < n; j++) {
            str += (binary1[j] === '1' || binary2[j] === '1') ? '#' : ' ';
        }
        
        answer.push(str);
    }
    
    return answer;
}

// 내장 함수를 안 쓴 버전 
// function solution(n, arr1, arr2) {
//     let num1, num2, s;
//     let answer = [];
//     for (let i=0; i<n; i++){
//         num1 = arr1[i];
//         num2 = arr2[i];
//         s = '';
//         for (let j=0; j<n; j++){
//             s = (num1%2 + num2%2) ? '#'+s : ' '+s;
//             num1 = Math.floor(num1/2);
//             num2 = Math.floor(num2/2);
//         }
//         answer.push(s);
//     }    
//     return answer;
// }
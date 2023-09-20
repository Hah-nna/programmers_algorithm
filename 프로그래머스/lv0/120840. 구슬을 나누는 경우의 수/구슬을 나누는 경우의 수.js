function solution(balls, share) {
    
    let a = 1
    let b = 1
    let c = 1
    let minusCalc = balls - share
    
    for(let i = 1; i <= balls; i++) {
        a *= i
    }
    
    for(let i = 1; i <= minusCalc; i++) {
        b *= i
    }
    
    for(let i = 1; i <= share; i++) {
        c *= i
    }
    
    return Math.round(a / (b * c) )
    
    // 팩토리얼 함수 정의
//     function factorial(n) {
//         if (n === 0 || n === 1) {
//             return 1;
//         }
//         return n * factorial(n - 1);
//     }

//     // 조합 공식을 사용하여 경우의 수 계산
//     const combinations = factorial(balls) / (factorial(share) * factorial(balls - share));

//     return combinations;
}
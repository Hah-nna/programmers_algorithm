function solution(n) {
    
    if (n <= 2) return n;
    
    let dp = new Array(n + 1).fill(0);
    dp[1] = 1;  
    dp[2] = 2;  
    
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567;

    }
    
    return dp[n]
}

/* 피보나치 수열:

피보나치 수열은 다음과 같은 규칙을 가진 수열을 말함:

- 첫 두 항은 0과 1.
- 그 이후의 모든 항은 바로 앞 두 항의 합.

수학적으로 표현하면 아래와 같음:
F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2) (n ≥ 2)
예: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
*/
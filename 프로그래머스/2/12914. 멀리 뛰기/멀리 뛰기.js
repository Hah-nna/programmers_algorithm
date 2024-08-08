function solution(n) {
    
    if (n <= 2) return n;
    
    // 2. DP 배열 초기화
    let dp = new Array(n + 1).fill(0);
    dp[1] = 1;  // 1칸을 뛰는 방법 1가지
    dp[2] = 2;  // 2칸을 뛰는 방법 2가지
    
    // 3. 점화식을 이용한 DP 배열 채우기
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
        // dp[3] = dp[2] + dp[1] => 3 % 1234567 => 3
        // dp[4] = dp[3] + dp[2] => 2 % 1234567 => 2
    }
    
    // 4. 결과 반환
    return dp[n];
}
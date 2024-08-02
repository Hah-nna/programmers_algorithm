function solution(n)
{
    var ans = 0;
    

    // n에서 0으로 가는 역방향식으로 ㄱㄱ
    // n이 홀수면 -1(건전지 사용)
    // n이 짝수면 n/2(순간이동)
    while(n > 0) {
        if(n % 2 !== 0) {
            n--
            ans++
        } else {
            n /= 2 
        }
    }
    return ans
}
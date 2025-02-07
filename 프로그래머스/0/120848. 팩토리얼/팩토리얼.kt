class Solution {
    fun solution(n: Int): Int {
        var answer: Int = 0
        var num = 1

    for (i in 1..n step 1) {
        num *= i;
        if (num > n) {
            break;
        }
        answer = i;
    }

    return answer
    }
}
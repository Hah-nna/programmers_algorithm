class Solution {
    fun solution(num: Int, n: Int): Int {
        var answer: Int = 0
        when {
            num % n == 0 -> answer = 1
            else -> answer = 0
        }
        return answer
    }
}
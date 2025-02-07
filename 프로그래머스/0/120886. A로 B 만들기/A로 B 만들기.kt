class Solution {
    fun solution(before: String, after: String): Int {
        var answer: Int = 0
        for(i in before.indices) {
            var afterStrCount = after.count { it == before[i] }
            var beforeStrCount = before.count { it == before[i] }
            if(afterStrCount != beforeStrCount) {
                answer = 0
                break
            } else {
                answer = 1
            }
        }
        return answer
    }
}
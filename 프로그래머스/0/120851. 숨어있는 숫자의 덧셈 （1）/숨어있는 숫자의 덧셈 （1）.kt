class Solution {
    fun solution(my_string: String): Int {
        var answer = 0
        val regex = "[0-9]".toRegex()
        my_string.forEach { if(regex.matches(it.toString())) answer += it.toString().toInt() }
        return answer
    }
}
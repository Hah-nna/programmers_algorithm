class Solution {
    fun solution(numbers: IntArray): Double {
        var answer: Double = 0.0
        val length = numbers.size.toDouble()
        return numbers.sum() / length
    }
}
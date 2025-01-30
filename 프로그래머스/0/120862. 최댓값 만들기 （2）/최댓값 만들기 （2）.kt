import kotlin.math.*

class Solution {
    fun solution(numbers: IntArray): Int {
        val sortedArr = numbers.sorted()
        return max((sortedArr[0] * sortedArr[1]), (sortedArr[sortedArr.lastIndex] * sortedArr[sortedArr.lastIndex - 1]))
    }
}
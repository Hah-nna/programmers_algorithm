class Solution {
    fun solution(array: IntArray): Int {
        var answer: Int = 0
        val sortedArr = array.sorted()
        val middleIdx = sortedArr.size / 2
        return sortedArr[middleIdx]
    }
}
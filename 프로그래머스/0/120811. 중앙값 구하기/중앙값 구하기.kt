class Solution {
    fun solution(array: IntArray): Int {
        var answer: Int = 0
        array.sort()
        val middleIdx = array.size / 2
        return array[middleIdx]
    }
}
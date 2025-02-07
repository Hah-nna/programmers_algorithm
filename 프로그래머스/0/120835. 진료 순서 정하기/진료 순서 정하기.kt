class Solution {
    fun solution(emergency: IntArray): IntArray {
        val sortedArr = emergency.sortedDescending()
        val a = emergency.map { sortedArr.indexOf(it) + 1 }
        return a.toIntArray()
    }
}
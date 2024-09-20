class Solution {
    fun solution(array: IntArray, n: Int): Int {
        var answer: Int = 0
        // return array.filter{it == n}.size
        return array.count{it == n}
    }
}
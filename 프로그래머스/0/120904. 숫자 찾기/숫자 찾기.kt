class Solution {
    fun solution(num: Int, k: Int): Int {
        var nums = num.toString()
        val idx = nums.indexOf(k.toString())
        return if(idx >= 0) idx + 1 else -1
    }
}
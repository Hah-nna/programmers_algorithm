class Solution {
    fun solution(n: Int): Int {
        var answer: Int = 0
        // 6 * 5 = 30 % n = 0
        var i = 1
        while(true) {
            if((6 * i) % n == 0) break
            i++
        }
        return i
    }
}
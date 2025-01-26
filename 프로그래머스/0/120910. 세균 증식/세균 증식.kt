import kotlin.math.pow

class Solution {
    fun solution(n: Int, t: Int): Int {
        return n * (2.toDouble().pow(t)).toInt() 
    }
}
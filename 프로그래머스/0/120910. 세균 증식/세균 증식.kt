import kotlin.math.pow

class Solution {
    // O(log t)
    // fun solution(n: Int, t: Int): Int {
    //     return n * (2.toDouble().pow(t)).toInt() 
    // }
    
    // O(t)
   fun solution(n: Int, t: Int) = (1..t).fold(n) { acc, i -> acc * 2 }
}
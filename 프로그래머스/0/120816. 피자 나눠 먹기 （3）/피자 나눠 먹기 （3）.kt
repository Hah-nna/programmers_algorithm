import kotlin.math.* 

class Solution {
    fun solution(slice: Int, n: Int): Int {    
        val expression = n.toFloat() / slice.toFloat()
        return ceil(expression).toInt()
    }
}
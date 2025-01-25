import kotlin.math.ceil

class Solution {
    fun solution(slice: Int, n: Int): Int {    
        // val expression = n / slice.toDouble()
        // return ceil(expression).toInt()
        return (n / slice) + if(n % slice == 0) 0 else 1 
    }
    // fun solution(slice: Int, n: Int) = ceil( n / slice.toDouble()) 
}
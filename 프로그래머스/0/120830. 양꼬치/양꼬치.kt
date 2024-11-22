class Solution {
    fun solution(n: Int, k: Int): Int {
     var bonus = (n / 10).toInt()
    return (n * 12000) + (k * 2000) - 2000 * bonus 
    }
}
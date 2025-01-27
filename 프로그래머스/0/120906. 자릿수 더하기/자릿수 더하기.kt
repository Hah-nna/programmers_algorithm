class Solution {
    fun solution(n: Int) = n.toString().chunked(1).fold(0){ acc, i -> acc + i.toInt()}
    
}
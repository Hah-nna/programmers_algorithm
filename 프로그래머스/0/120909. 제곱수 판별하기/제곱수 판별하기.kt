class Solution {
    fun solution(n: Int): Int {
        var i: Int = 2
        while(i <= 500000) {
            if(i * i == n) return 1
             i++
        }
        return 2
        
    }
}
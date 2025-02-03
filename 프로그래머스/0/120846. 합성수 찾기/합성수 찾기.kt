import kotlin.math.*

class Solution {
    fun solution(n: Int): Int {
        var answer: Int = 0
        
        for(i in 4..n) {
            var j = 1
            var sqrtt = sqrt(i.toFloat())
            var count = 1
            
            while(j <= sqrtt) {
                if(i % j == 0) {
                    count++
                }
                j++
            
            }
            if(count >= 3) answer++ 
            
        }
        
        return answer
    }
}
class Solution {
    fun solution(n: Int): Int {
        var answer: Int = 0
        for(i in 2..n) {
          if(i % 2 == 0) answer += i  
        }
        return answer
    }
}
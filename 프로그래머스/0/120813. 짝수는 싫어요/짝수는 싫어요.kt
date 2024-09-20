class Solution {
    fun solution(n: Int): IntArray {
        
        // return (1..n).filter{it % 2 != 0} .toIntArray()
        var answer = mutableListOf<Int>()
        for(num in 1..n step 2) {
            answer.add(num)
        }
        
        return answer.toIntArray()
    }
}
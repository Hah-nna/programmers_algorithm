class Solution {
    fun solution(n: Int): Int {
        var answer: Int = 0
        answer = (2..n).filter{it % 2 == 0}.sum()
        return answer
    }
}
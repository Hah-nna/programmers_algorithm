/*
function solution(price) {
    if(price < 100000) return price
    if(price >= 100000 && price < 300000) return Math.trunc(price - (price * 0.05))
    if(price >= 300000 && price < 500000) return Math.trunc(price - (price * 0.1))
    if(price >= 500000) return Math.trunc(price - (price * 0.2))
}
*/

class Solution {
    fun solution(price: Int): Int {
        var answer: Int = 0
        answer = when(price) {
            in 10..99999 -> price
            in 100000..299999 -> (price - (price * 0.05)).toInt()
            in 300000..499999 -> (price - (price * 0.1)).toInt()
            else -> (price - (price * 0.2)).toInt()
        }
        return answer
    }
}
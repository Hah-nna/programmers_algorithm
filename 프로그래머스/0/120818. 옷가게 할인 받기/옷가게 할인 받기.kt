class Solution {
    fun solution(price: Int): Int {
        var answer: Int = 0
        var discount = when{
          price >= 500_000 -> price * 0.8
          price >= 300_000 -> price * 0.9
          price >= 100_000 -> price * 0.95
          else -> price 
        }.toInt()
        // answer = when(price) {
        //     in 10..99999 -> price
        //     in 100_000..299_999 -> (price - (price * 0.05))
        //     in 300_000..499_999 -> (price - (price * 0.1))
        //     else -> (price - (price * 0.2))
        // }.toInt()
        return discount
    }
}
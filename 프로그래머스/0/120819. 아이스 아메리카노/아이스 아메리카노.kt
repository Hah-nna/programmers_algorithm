/*
function solution(money) {
    let num = Math.trunc(money / 5500)
    return [num, money % 5500]
}
*/

class Solution {
    fun solution(money: Int): IntArray {
        val num = money / 5500  
        return intArrayOf(num, money % 5500)
    }
}
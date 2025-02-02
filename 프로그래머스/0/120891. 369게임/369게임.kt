class Solution {
    fun solution(order: Int) = order.toString().filter { it == '3' || it == '6' || it == '9' }.length
}
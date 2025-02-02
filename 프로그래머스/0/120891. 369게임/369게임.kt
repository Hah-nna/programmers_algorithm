class Solution {
    fun solution(order: Int) = order.toString().count { it != '0' && it.digitToInt() % 3 == 0 }
        // = order.toString().filter { it == '3' || it == '6' || it == '9' }.length
}
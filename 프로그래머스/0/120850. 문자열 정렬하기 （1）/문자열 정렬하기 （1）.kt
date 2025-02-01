class Solution {
    fun solution(my_string: String)
    = my_string.filter { it.isDigit()}.map{ it.digitToInt() }.sorted()
    // = my_string.filter { it.isDigit()}.map{ it.toString().toInt()}.sorted()
        
}
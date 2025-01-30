class Solution {
    fun solution(my_string: String): String {
        return my_string.map {
            if(it == it.toLowerCase()) it.toUpperCase()
            else it.toLowerCase()
        }.joinToString("")
    }
}
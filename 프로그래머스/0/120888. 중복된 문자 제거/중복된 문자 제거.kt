class Solution {
    fun solution(my_string: String): String {
        var setArr = mutableSetOf<Char>()
        
        my_string.map { setArr.add(it) }
        
        return setArr.joinToString("")
    }
}
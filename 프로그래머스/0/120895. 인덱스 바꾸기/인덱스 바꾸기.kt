class Solution {
    fun solution(my_string: String, num1: Int, num2: Int): String {
       
        var charArr = my_string.toCharArray()
        
        val temp = charArr[num1]
        charArr[num1] = charArr[num2]
        charArr[num2] = temp
        return charArr.joinToString("")
    }
}
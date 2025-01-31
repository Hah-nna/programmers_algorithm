import java.util.*

class Solution {
    fun solution(my_string: String, num1: Int, num2: Int): String {
       
//         var charArr = my_string.toCharArray()
        
//         val temp = charArr[num1]
//         charArr[num1] = charArr[num2]
//         charArr[num2] = temp
//         return charArr.joinToString("")
       return my_string.toList().let{
            Collections.swap(it, num1, num2)
            it.joinToString("")
        }
}
}
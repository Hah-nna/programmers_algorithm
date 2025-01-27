class Solution {
//     fun solution(myStr: String): String {
//         var answer: String = ""
//         for(str in myStr) {
//             when{
//                 str !in "aeiou"
//                 -> answer += str
            
//             }
//             println(str)
//         }
//         return answer
//     }
    
    fun solution(myStr: String) = myStr.filterNot { it in "aeiou" }
    
}
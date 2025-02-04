class Solution {
    fun solution(i: Int, j: Int, k: Int): Int {
        var answer = 0
       for(str in i..j) {
           str.toString().forEach{
               if(it.toString() == k.toString()) answer++
           }
       }
       return answer
    }
}
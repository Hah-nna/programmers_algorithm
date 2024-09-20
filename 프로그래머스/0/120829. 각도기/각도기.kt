class Solution {
    fun solution(angle: Int): Int {
        var answer = 0;
        // when{
        //     angle > 0 && angle < 90 ->  answer = 1
        //     angle == 90 ->  answer = 2
        //     angle > 90 && angle < 180 -> answer = 3
        //     angle >= 180 ->  answer = 4
        // }
        // return answer
       when(angle) {
            in 1..89 -> answer = 1
            90 -> answer = 2
            in 91..179 -> answer = 3
            else -> answer = 4
        }
       return answer
    }

}
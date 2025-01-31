import kotlin.math.*
   
class Solution {
    fun solution(array: IntArray): IntArray {
       
        var max = array[0]
        var index = 0
        for(idx in array.indices) {
            if(array[idx] > max) {
                max = array[idx]
                index = idx
            }
        }
        return intArrayOf(max, index)
    }
}
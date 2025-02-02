class Solution {
    fun solution(numbers: IntArray, direction: String): IntArray {
       return if(direction == "right") {
            intArrayOf(numbers.last()) + numbers.dropLast(1)
        } else {
            numbers.drop(1).toIntArray() + intArrayOf(numbers.first())
        }
    }
}
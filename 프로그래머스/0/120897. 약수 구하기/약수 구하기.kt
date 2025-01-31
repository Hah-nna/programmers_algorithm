class Solution {
    fun solution(n: Int): IntArray {
       // var arr = mutableListOf<Int>()
       //  var i = 1
       //  while(i <= n) {
       //      if(n % i == 0) arr.add(i)
       //       i++
       //  }
       //  return arr.toIntArray()
        return (1..n).filter { n % it == 0}.toIntArray()
    }
}
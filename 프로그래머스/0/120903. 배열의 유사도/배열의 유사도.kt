class Solution {
    fun solution(s1: Array<String>, s2: Array<String>): Int {
        // var answer = 0
        // // 이중포문
        // for(i in s2.indices) {
        //     for(j in s1) {
        //         if(s2[i] == j) answer++
        //     }
        // }
        // return answer
        
        // return s1.count { s2.contains(it) }
        return s1.map(s2::contains).count{ it }
}
}
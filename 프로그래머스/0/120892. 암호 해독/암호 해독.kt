class Solution {
    fun solution(cipher: String, code: Int): String {
        var str = ""
        for(i in code - 1..cipher.length - 1 step(code)) {
            str += cipher[i]
        } 
        return str
    }
}
class Solution {
    fun solution(hp: Int): Int {
        val generalAnt = hp / 5  
        val remainAfterGeneral = hp % 5  
        val soldierAnt = remainAfterGeneral / 3  
        val workerAnt = remainAfterGeneral % 3 
        
        return generalAnt + soldierAnt + workerAnt
       
    }
}
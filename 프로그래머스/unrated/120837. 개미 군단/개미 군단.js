function solution(hp) {
    
    
    const generalAnt = Math.floor(hp / 5)
    const soldierAnt = Math.floor((hp - (generalAnt * 5)) / 3)
    const workerAnt = hp - ((generalAnt * 5) + (soldierAnt * 3))
    return generalAnt + soldierAnt + workerAnt
}

// function solution(hp) {
    
//     var count = 0;
//     while(hp >= 5) {
//         hp -= 5
//         count++
//     }
    
//     while(hp >= 3) {
//         hp -= 3
//         count++
//     }
    
//     while(hp > 0) {
//         hp -= 1
//         count++
//     }
//     return count
// }
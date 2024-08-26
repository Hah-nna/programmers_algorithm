function solution(clothes) {
    var answer = 1;
    let combination = new Map()
    
    for(let i = 0; i < clothes.length; i++) {
        combination.set(clothes[i][1], (combination.get(clothes[i][1]) || 0 ) + 1)
        // answer *= combination.get(clothes[i][1]) + 1
        // console.log(combination.get(clothes[i][1]))
    }
    // console.log(combination)
    for(let [key, value] of combination) {
        answer *= (value + 1)    
    }
    return answer - 1
}
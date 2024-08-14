function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    let p1 = 0
    let p2 = 0;
    
    for(let word of goal) {
        if(word === cards1[p1]) p1++
        else if(word === cards2[p2]) p2++
        else if(word !== cards1[p1] || word !== cards2[p2]) {
            return "No"
        }
    }
    return answer;
}
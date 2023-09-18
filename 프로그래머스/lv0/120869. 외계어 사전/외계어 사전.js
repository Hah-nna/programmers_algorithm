function solution(spell, dic) {
    var answer = 1
    let sortedSpell = spell.sort().join('')
    // dic 배열을 하나씩 순회하면서 spell에 있는 요소들이 포함되는지 확인
    
    for(let i = 0; i < dic.length; i++) {
        // dic 순회
        let sortedDic = [...dic[i]].sort().join('')
        if(sortedSpell === sortedDic) {
            answer = 1
            break;
        } else {
            answer = 2
        }
    }
    
    
    return answer;
}
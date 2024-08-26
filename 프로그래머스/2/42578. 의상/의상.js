function solution(clothes) {
    var answer = 1;
    let combination = new Map()
    
    for(let i = 0; i < clothes.length; i++) {
        combination.set(clothes[i][1], (combination.get(clothes[i][1]) || 0 ) + 1)
    }
    
    for(let [key, value] of combination) {
        answer *= (value + 1) 
        // 입지 않는 경우를 더해주기
// ex: 얼굴(안경, 선글라스)(2개) -> 선택하는 수(3개) => 안경착용, 선글라스착용, 얼굴 착용x(착용x경우를 더해주기)
    }
    return answer - 1
// 모든 종류의 의상을 다 입지 않는 경우 빼기(왜냐면 위에서 각 종류별로 착용하지 않는 경우를 더해주었기 때문)
}
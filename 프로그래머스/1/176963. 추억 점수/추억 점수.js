function solution(name, yearning, photo) {
    var answer = [];
    // map 사용해서 이름과 추억점수 배열 오브젝트로 만들기
    // 포토를 돌면서 각 이름이 map에 있는지 체크
    // 있다면 sum += photo[i][j]
    // j열 포문이 끝나면 answer에 push(sum)
    let people = new Map()
    for(let i = 0; i < name.length; i++) {
        people.set(name[i], yearning[i])
        // Map(4) { 'may' => 5, 'kein' => 10, 'kain' => 1, 'radi' => 3 }
    }
        
    for(let item of photo) {
        let sum = 0;
        for(let j = 0; j < item.length; j++) {
          if(people.has(item[j])) {
              sum += people.get(item[j])
          }  
        }
        answer.push(sum)
    }
    return answer
}
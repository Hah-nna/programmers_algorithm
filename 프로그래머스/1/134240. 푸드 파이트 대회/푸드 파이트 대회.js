function solution(food) {
    // food = [물, 1번, 2번, 3번 음식]
    
    var answer = '';
    for(let i = 1; i < food.length; i++) {
        let a = Math.floor(food[i] / 2)
        answer += (i+"").repeat(a)
    }
    let reverse = [...answer].reverse().join('')
    let water = '0'.repeat(food[0])
    
    answer += water
    answer += reverse
    return answer
    
}
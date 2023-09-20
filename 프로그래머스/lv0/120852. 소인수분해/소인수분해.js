function solution(n) {
    var answer = [];
    let count = 2
    
    while(n !== 1){
        if(n % count === 0) {
            answer.push(count)
            n /= count
        } else {
        count++    
        }
        
        // n을 count로 나눴을 때 나머지가 0미면
        // count를 push, 나눈 값을 다시 num에 저장
        // 만약 나머지가 0이 안 되면 count++하고 다시 2로 나눠보기
        // 그런데도 나머지가 0이 아니면 종료
    }
    return [...new Set(answer)].sort((x,y) => x - y)
}
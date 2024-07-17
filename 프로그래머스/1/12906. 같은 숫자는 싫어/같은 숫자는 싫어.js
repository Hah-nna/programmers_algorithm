function solution(arr)
{
    var answer = [];

    // answer가 빈 값이면 push
    // answer에 push하기전에 arr[i]의 값이 answer.at(-1) 혹은 [answer.length - 1]이랑 같은지 확인
    // 다르다면 push
    
    for(let i = 0; i < arr.length; i++) {
        if(answer.at(-1) !== arr[i]) answer.push(arr[i]) 
    }
        return answer;
}
function solution(board, k) {
    var answer = 0;
    // i + j <= k면 answer += 하기
    let sum = 0;
    for(let i = 0; i < board.length; i++) {
        console.log("i", i)
        for(let j = 0; j < board[i].length; j++) {
            console.log(j)
            if((i + j) <= k) {
                answer += board[i][j]
            }
            
        }
    }
    return answer;
}
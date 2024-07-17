function solution(A,B){
    var answer = 0;

    // 하나는 오름차순, 하나는 내림차순으로 정렬
    // 큰 수가 작게 곱해져야 값이 작아짐
    // [1,2,4], [5,4,4]
    // 1*5 = 5
    // 2*4 = 8
    // 4*4 = 16 => 29
    
    // [1,2] [4,3]
    // 1*4 = 4
    // 2*3 = 6 => 10
    
    const aa = A.sort((x,y) => x - y)
    const bb = B.sort((x,y) => y - x)

    aa.forEach((val, idx) => {
        answer += (val * bb[idx])
    })
    return answer
}
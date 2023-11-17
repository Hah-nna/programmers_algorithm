function solution(arr) {
    // const repeatArr = arr.map((val) => String(val).repeat(val)).join('')
    // return [...repeatArr].map((val) => Number(val))
    // 두 자리수 이상의 값인 경우 다르게 나옴
    let answer = []
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i]; j++) {
            answer.push(arr[i])
        }
    }
    return answer
}
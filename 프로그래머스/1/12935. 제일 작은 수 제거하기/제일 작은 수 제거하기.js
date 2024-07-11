function solution(arr) {
    // 돌면서 작은 수 찾음
    // 이거 인덱스를 찾음
    // 삭제함
    // 삭제하고 남은 어레이를 리턴함
    // answer !== -1이면 arr.slice(인덱스, 1) : [-1] 
    let min = arr[0]
    for(let i of arr) {
        if(min > i) min = i
    }
    // const answer = arr.indexOf(min)
    return arr.length !== 1 ? arr.filter((val) => val !== min) : [-1]
}
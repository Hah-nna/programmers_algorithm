function solution(arr) {
    let a = arr.reduce((acc, cur) => acc + cur ,0)
    return a / arr.length
}
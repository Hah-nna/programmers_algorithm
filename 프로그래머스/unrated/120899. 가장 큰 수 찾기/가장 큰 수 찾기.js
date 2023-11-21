function solution(array) {
    const maxNum = Math.max(...array)
    const idx = array.findIndex((num) => num === maxNum)
    return [maxNum, idx];
}
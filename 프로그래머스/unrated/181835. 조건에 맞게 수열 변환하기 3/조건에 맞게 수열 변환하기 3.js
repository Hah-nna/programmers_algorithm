function solution(arr, k) {
    return arr.map((val) => k % 2 !== 0 ? val * k : val + k)
}
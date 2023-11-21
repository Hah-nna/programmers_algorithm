function solution(numbers) {
    var arr = numbers.sort((x,y) => x - y)
    const len = arr.length
    // return arr[len - 1] * arr[len - 2] > arr[0] * arr[1] ? arr[len - 1] * arr[len - 2] : arr[0] * arr[1]
    return Math.max(arr[0] * arr[1], arr[len - 1] * arr[len - 2])
}
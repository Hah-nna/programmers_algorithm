function solution(arr, divisor) {
    arr.sort((x,y) => x - y)
    let a = arr.filter((val) => {
        return (val % divisor) === 0
    })
    
    return a.length === 0 ? [-1] : a
}
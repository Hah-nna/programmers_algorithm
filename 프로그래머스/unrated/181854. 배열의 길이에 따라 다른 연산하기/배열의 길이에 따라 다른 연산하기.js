function solution(arr, n) {
    const newArr = arr.map((val, idx) => {
        if(arr.length % 2 === 0 && idx % 2 !== 0) {
            
               return val + n 
        }
        if(arr.length % 2 !== 0 && idx % 2 === 0) {
               return val + n
            }
        return val
    })
    return newArr
}
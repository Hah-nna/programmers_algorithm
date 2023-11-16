function solution(strArr) {
    return strArr.map((val, idx) => {
       return idx % 2 !== 0 ? val.toUpperCase() : val.toLowerCase()
    })
}
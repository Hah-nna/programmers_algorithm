function solution(i, j, k) {
    let result = 0
    while(i <= j) {
      result += [...String(i)].filter((val) => val === String(k)).length
      i++  
    }
    return result
}
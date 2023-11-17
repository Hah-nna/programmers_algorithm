function solution(arr1, arr2) {
    const length1 = arr1.length
    const length2 = arr2.length
    
    if(length1 > length2) return 1
    if(length1 < length2) return -1
    
    if(length1 === length2) {
        let a = 0
        let b = 0
      for(let i = 0; i < length1; i++) {
          a += arr1[i]
          b += arr2[i]
      }
        if(a > b) return 1
        if(a < b) return -1
        if(a === b) return 0
    }
}
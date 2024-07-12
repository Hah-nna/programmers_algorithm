function solution(arr1, arr2) {
    let newArr = Array.from(arr1, () => [])
    // newArr = Array.from(arr1).fill([])
    // 이건 각 요소가 다른 배열을 참조하는 거 같지만 실제로는 같은 배열을 참고하므로, 값이 덮어씌워지게 됨
    // 주의!!
    
    for(let i = 0; i < arr1.length; i++) {
        // a[0][0] + b[0][0] = 1+3 = 4 
        // a[0][1] + b[0][1] = 2+4 = 6
        // a[1][0] + b[1][0] = 2+5 = 7
        // a[1][1] + b[1][1] = 3+6 = 9
        for(let j = 0; j < arr1[i].length; j++) {
            newArr[i][j] = arr1[i][j] + arr2[i][j]
        
        }
    }
    return newArr
}
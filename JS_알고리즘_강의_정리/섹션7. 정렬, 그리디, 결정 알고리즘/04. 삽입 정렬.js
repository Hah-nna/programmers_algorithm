function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i],
      j;

    // 1 -> arr[0]: 11
    // tmp = arr[1]: 7
    // tmp = arr[2]: 5
    // tmp = arr[3]: 6

    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) {
        arr[j + 1] = arr[j];
        // arr[0]: 11 > tmp: 7 -> [11, 11, 5, 6, 10, 9];
        // arr[1]: 11 > tmp: 5 -> [7, 11, 11, 6, 10, 9];
        // arr[0]: 7 > tmp: 5 -> [7, 7, 11, 6, 10, 9];
        //-----
        // arr[2]: 11 > tmp: 6 -> [5, 7, 11, 11, 10, 9];
        // arr[1]: 7 > tmp: 6 -> [5, 7, 7, 11, 10, 9];
        console.log("arr1", arr);
      } else break;
      //j = -1  조건 실행x
    }
    arr[j + 1] = tmp;
    console.log("tmp", tmp);
    console.log("arr2", arr);
    // ㅓ = -1 / [7, 11, 5, 6, 10, 9];
    // ㅓ = -1 / [5, 7, 11, 6, 10, 9];
  }
  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));

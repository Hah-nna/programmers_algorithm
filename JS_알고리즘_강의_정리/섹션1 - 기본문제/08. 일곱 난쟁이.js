function solution(arr) {
  let result = arr;
  let sum = result.reduce((x, y) => x + y, 0);
  let flag = 0;

  for (let i = 0; i < arr.length; i++) {
    for (j = 1; j < arr.length + 1; j++) {
      if (sum - (result[i] + result[j]) === 100) {
        result.splice(j, 1);
        result.splice(i, 1);
        flag = 1;
        break;
      }
    }
    if (flag === 1) break;
  }

  return result;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

// 다시 풀어보기 ㅡㅡ

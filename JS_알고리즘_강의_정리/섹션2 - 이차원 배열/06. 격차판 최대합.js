function solution(arr) {
  let row = [];
  let col = [];
  let cross = [];

  let rowNum = 0;
  let colNum = 0;
  let crossNum1 = 0;
  let crossNum2 = 0;

  // 행의 합
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      rowNum += arr[i][j];
      if (j === arr.length - 1) {
        row.push(rowNum);
        rowNum = 0;
      }
    }
  }

  // 열의 합
  for (let m = 0; m < arr.length; m++) {
    for (let n = 0; n < arr.length; n++) {
      colNum += arr[n][m];
      if (n === arr.length - 1) {
        col.push(colNum);
        colNum = 0;
      }
    }
  }

  // 대각선의 합
  for (let i = 0; i < arr.length; i++) {
    crossNum1 += arr[i][i];
    crossNum2 += arr[0][arr.length - i - 1];
  }

  let rowMax = Math.max(...row);
  let colMax = Math.max(...col);

  return Math.max(rowMax, colMax, crossNum1, crossNum2);
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));

// 강사님이 푼 방법
function solution(arr) {
  let sum1 = 0; // 행
  let sum2 = 0; // 열
  let n = arr.length;
  let result;

  // 각각의 행렬의 값 구하기
  for (let i = 0; i < n; i++) {
    sum1 = 0;
    sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    result = Math.max(sum1, sum2);
  }

  sum1 = 0;
  sum2 = 0;

  // 대각선의 합 구하기
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  result = Math.max(result, sum1, sum2);
  return result;
}

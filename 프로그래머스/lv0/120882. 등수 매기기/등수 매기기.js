function solution(score) {
  const averageArr = score.map((val, idx) => {
    return (val[0] + val[1]) / 2;
  });

  const resultArr = Array.from({ length: averageArr.length }, () => 1);

  for (let i = 0; i < averageArr.length; i++) {
    for (let j = 0; j < averageArr.length; j++) {
      if (averageArr[i] > averageArr[j]) resultArr[j]++;
    }
  }
  return resultArr;
}

// [1,1,1,1]
// arr[i] > arr[j]
// i = 0, 75 / [1,2,2,2]
// i = 1, 70 / [1,2,3,3]
// i = 2, 55 / [1,2,3,3]
// i = 3, 65 / [1,2,4,3]

// 다른 사람이 해결한 방법
function solution(score) {
  const total = score.map((n) => n[0] + n[1]);
  const rank = [...total].sort((a, b) => b - a);
  return total.map((n) => rank.indexOf(n) + 1);
}

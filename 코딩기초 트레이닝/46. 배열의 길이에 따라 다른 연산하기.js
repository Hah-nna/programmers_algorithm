function solution(arr, n) {
  if (arr.length % 2 !== 0) {
    return arr.map((val, idx) => (idx % 2 === 0 ? val + n : val));
  } else {
    return arr.map((val, idx) => (idx % 2 === 1 ? val + n : val));
  }
}

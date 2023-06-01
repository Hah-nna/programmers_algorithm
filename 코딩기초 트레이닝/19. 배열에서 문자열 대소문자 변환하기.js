function solution(strArr) {
  return strArr.map((val, idx) =>
    idx % 2 === 1 ? val.toUpperCase() : val.toLowerCase()
  );
}

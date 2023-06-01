function solution(arr) {
  const X = [];
  arr.forEach((value) => {
    for (let i = 0; i < value; i++) {
      X.push(value);
      // console.log(value)
    }
  });
  return X;
}

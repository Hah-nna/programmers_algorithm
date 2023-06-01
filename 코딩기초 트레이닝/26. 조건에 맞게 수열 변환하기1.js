function solution(arr) {
  return arr.map((z) => {
    if (z >= 50 && z % 2 === 0) {
      return z / 2;
    } else if (z < 50 && z % 2 === 1) {
      return z * 2;
    }
    return z;
  });
}

function solution(strArr) {
  const counter = Array(31).fill(0);
  // 인덱스 0부터 31까지의 수 만큼 0으로 채운 배열 반환
  // 길이 저장할 용도
  //	[
  //  0, 2, 2, 1, 0, 0, 0, 0, 0,
  //  0, 0, 0, 0, 0, 0, 0, 0, 0,
  //  0, 0, 0, 0, 0, 0, 0, 0, 0,
  //  0, 0, 0, 0
  // ]

  for (const str of strArr) {
    counter[str.length]++;
  }
  return Math.max(...counter);
}

// 처음 풀었던 방식
function solution(n, slicer, num_list) {
  let answer = [];
  const [a, b, c] = slicer;
  switch (n) {
    case (n = 1):
      answer = num_list.slice(0, [b + 1]);
      break;
    case (n = 2):
      answer = num_list.slice([a]);
      break;
    case (n = 3):
      answer = num_list.slice([a], [b + 1]);
      break;
    case (n = 4):
      let newSlice = num_list.slice([a], [b + 1]);
      answer = newSlice.filter((_, idx) => idx % [c] === 0);
      break;
  }
  return answer;
}

// 위의 방식을 조금 더 가다듬었음
function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;
  switch (n) {
    case (n = 1):
      return num_list.slice(0, b + 1);
    case (n = 2):
      return num_list.slice(a);
    case (n = 3):
      return num_list.slice(a, b + 1);
    case (n = 4):
      let newSlice = num_list.slice(a, b + 1);
      return newSlice.filter((_, idx) => idx % c === 0);
  }
  return answer;
}

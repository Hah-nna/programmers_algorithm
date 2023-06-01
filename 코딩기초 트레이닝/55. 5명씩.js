function solution(names) {
  var answer = [];
  names.map((val, idx) => {
    if (idx % 5 === 0) {
      answer.push(val);
    }
  });
  return answer;
}

function solution(names) {
  return names.filter((val, idx) => idx % 5 === 0);
}

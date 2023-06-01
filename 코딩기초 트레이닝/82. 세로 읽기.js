// 뭔가 이차원 배열을 해결해서 풀어야할 거 같은데
// 제대로 활용을 하지 못해서 다른 사람들의 풀이를 해석하면서 참고함
// 다시 보면서 공부하기

// 방법1
function solution(my_string, m, c) {
  let answer = [];
  let str = "";
  let a = my_string.split("");
  for (let i = 0; i < a.length; i += m) {
    answer.push(a.slice(i, i + m));
  }

  for (let j = 0; j < answer.length; j++) {
    str += answer[j][c - 1];
  }
  return str;
}

// 방법 2
function solution(my_string, m, c) {
  var answer = "";

  for (let i = 0; i < my_string.length; i += m) {
    answer += my_string[i + c - 1];
  }
  return answer;
}

// 방법 3
function solution(my_string, m, c) {
  let answer = "";
  let arr = [];
  let count = 0;

  for (let i = 0; i < my_string.length / m; i++) {
    arr.push(my_string.substr(count, m));
    count += m;
  }

  for (let i = 0; i < arr.length; i++) {
    answer += arr[i][c - 1];
  }

  return answer;
}

// 방법4

function solution(my_string, m, c) {
  return Array(my_string.length / m)
    .fill()
    .map((x, i) => [...my_string.slice(i * m, i * m + m)][c - 1])
    .join("");
}

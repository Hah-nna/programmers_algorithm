function solution(a, b, c) {
  // const answer = Math.min(a, b, c);

  let answer;
  if (a > b) answer = b;
  else answer = a;

  if (answer > c) answer = c;
  return answer;
}
console.log(solution(2, 5, 1));

// {
/* function solution(a, b, c) {
  let arr = [a, b, c];
  let num;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      num = arr[i + 1];
    } else if (arr[i] < arr[i + 1]) {
      num = arr[i];
    }
  }
  return num;
}
function solution(a, b, c) {
  return Math.min(a, b, c);
}

function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
} */
// }

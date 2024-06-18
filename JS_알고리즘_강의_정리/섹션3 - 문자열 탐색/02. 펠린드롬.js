function solution(s) {
  let regex = /[A-Za-z]/gi;
  let a = s.match(regex).join("").toLowerCase();

  for (let i = 0; i < Math.floor(a.length / 2); i++) {
    if (a[i] !== a[a.length - i - 1]) return "NO";
  }
  return "YES";
}
let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));

function solution(s) {
  let regex = /[A-Za-z]/gi;
  let a = s.match(regex).join("").toLowerCase();

  for (let i = 0; i < Math.floor(a.length / 2); i++) {
    if (a[i] !== a[a.length - i - 1]) return "NO";
  }
  return "YES";
}

// 문자열을 하나씩 비교하는 방법
function solution(str) {
  let answer = "YES";
  const newArr = str.split(" ");
  let n = Math.floor(newArr.length / 2);

  for (let i = 0; i < n; i++) {
    const regex = /[a-z]/gi;
    let front = newArr[i].match(regex).join("").toLowerCase();
    let end = newArr[newArr.length - i - 1]
      .match(regex)
      .reverse()
      .join("")
      .toLowerCase();

    console.log(front, end);
    if (front !== end) return "NO";
  }

  return answer;
}

// 알파벳만 뽑아서 소문자화시킴. 그리고 그 문자열과 리버스한 문자열이 같은지 확인
// 이게 더 간단함
function solution(str) {
  const regex = /[^a-z]/gi;

  // 인자로 받은 문자열 소문자
  // 정규식으로 a-z를 제외한 나머지를 빈문자열로 치환
  // 리버스 함
  // 비교해서 문자열 출력
  const lower = str.toLowerCase().replaceAll(regex, "");
  const reverse = [...lower].reverse().join("");

  return lower !== reverse ? "NO" : "YES";
}

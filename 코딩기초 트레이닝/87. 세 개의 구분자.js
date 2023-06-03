// 내가 푼 방법
function solution(myStr) {
  let a = myStr.replaceAll(/[a-c]/g, "1");
  let b = a.split("1").filter((val) => val);
  return b.length ? b : ["EMPTY"];
}

// 다른 사람의 풀이 방법

function solution(myStr) {
  const list = myStr.split(/[a|b|c]/).filter((str) => str);
  return list.length ? list : ["EMPTY"];
}

// 나의 경우에는 a,b,c를 다 문자열 1로 바꾸어 split했는데
// 이렇게 split에 정규식을 쓸 수 있는 줄 몰랐다... 이번에 알게되었으니 써먹자

const solution = (s) => s.match(/[^a-c]+/g) || ["EMPTY"];
// [^]: 부정(not)을 의미한다. 얘를 들어 [^a-z]는 알파벳 소문자로 시작하지 않는 모든 문자를 의미한다.
// [] 바깥의 ^는 문자열의 처음을 의미한다.
// ^ : 문자열의 처음을 의미한다.
//const regexr = /^http/;
//console.log(regexr.test(url)); // true

// 즉, s.match(/[^a-c]+/g)는 a,b,c 문자를 포함하지 않는 하나 이상의 연속된 문자열과 매치되는 걸 리턴하라는 뜻
// 헷갈리는 부분이니 체크

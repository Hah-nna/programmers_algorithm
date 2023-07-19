function solution(s) {
  let regex = /[A-Z]/g;
  let a = s.match(regex);
  return a.length;
}

let str = "KoreaTimeGood";
console.log(solution(str));

// 대문자 아스키문자번호 : 65 ~ 90
// 소문자 아스키문자번호 : 97 ~ 122

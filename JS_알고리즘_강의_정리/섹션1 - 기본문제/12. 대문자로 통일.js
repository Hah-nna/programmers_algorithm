function solution(s) {
  let result = "";
  for (let item of s) {
    item === item.toLowerCase()
      ? (result += item.toUpperCase())
      : (result += item);
  }
  return result;
}

let str = "ItisTimeToStudy";
console.log(solution(str));

function solution(s) {
  let result = "";
  for (let item of s) {
    let num = item.charCodeAt();
    num >= 65 && num < 90 ? (result += item) : (result += item.toUpperCase());
  }
  return result;
}

function solution(s) {
  let answer = "";
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;
  }

  return answer;
}

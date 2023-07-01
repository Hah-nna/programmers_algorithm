// 내가 푼 방법

// for문
function solution(cipher, code) {
  let answer = "";
  let idx = code - 1;

  for (let i = idx; i < cipher.length; i += code) {
    answer += cipher[i];
  }

  return answer;
}

// if, while문 사용
function solution(cipher, code) {
  if (code === 1) {
    return cipher;
  }

  let answer = "";
  let idx = code - 1;
  let num = 0;

  while (idx < cipher.length) {
    if (num === idx) {
      answer += cipher[num];
      num++;
      idx += code;
    }
    num++;
  }

  return answer;
}

function solution(s) {
  // 영문 대문자 : 65 ~ 90, 영문 소문자 : 97 ~ 122
  let lowerCase = "";
  let upperCase = "";

  for (let i of s) {
    let alphabet = i.charCodeAt();
    if (alphabet >= 65 && alphabet <= 90) upperCase += i;
    else lowerCase += i;
  }

  lowerCase = [...lowerCase].sort((x, y) => (x > y ? -1 : 1)).join("");
  upperCase = [...upperCase].sort((x, y) => (x > y ? -1 : 1)).join("");

  return lowerCase + upperCase;
}

function solution() {
  return s
    .split("")
    .sort((a, b) => {
      // * 콜백 함수가 음수를 반환하면, a가 b보다 앞에 정렬됩니다.
      // * 콜백 함수가 양수를 반환하면, b가 a보다 앞에 정렬됩니다.
      // * 콜백 함수가 0을 반환하면, a와 b의 상대적인 순서는 변경되지 않습니다.
      if (a > b) return -1;
      if (b > a) return 1;
      return 0;
    })
    .join("");
}

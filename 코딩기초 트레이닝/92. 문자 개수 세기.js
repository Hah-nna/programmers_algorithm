// 내가 해결한 방법
function solution(my_string) {
  let lowerCase = Array(26)
    .fill()
    .map((_, idx) => String.fromCharCode(idx + 97));
  let upperCase = Array(26)
    .fill()
    .map((_, idx) => String.fromCharCode(idx + 65));
  let newArr = [...upperCase, ...lowerCase];
  let myStr = [...my_string];
  let blankArr = Array(52).fill(0);

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < myStr.length; j++) {
      if (myStr[j] === newArr[i]) {
        blankArr[i] += 1;
      }
    }
  }
  return blankArr;
}

// 다른 사람의 방법 중 인상 깊었던 해결 방법

function solution(m) {
  let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let a = [];
  a.length = 52;
  a.fill(0);

  m.split("").map((n) => {
    a[al.indexOf(n)] += 1;
  });

  return a;
}

function solution(my_string) {
  let alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var answer = new Array(52).fill(0);
  for (let i = 0; i < my_string.length; i++) {
    answer[alp.indexOf(my_string[i])]++;
  }
  return answer;
}

// 둘다 비슷한데 위의 방법은 map을 사용해서 좀 더 깔끔하게
// 해결한 것이 인상깊다
// a[al.indexOf(n)] <- 이런 식으로 인덱스를 표현하는 게 머리속에서 아직 잘 떠오르지 않음
// 익숙해지면 괜찮을듯 비슷한 문제가 나왔을 때 활용해보자

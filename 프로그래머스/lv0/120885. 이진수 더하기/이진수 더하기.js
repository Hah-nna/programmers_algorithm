// 내가 푼 방법
function solution(bin1, bin2) {
  var answer;

  // 0 1 2  3  4    5    6    7    8     9     10
  // 0 1 10 11 100  101  110  111  1000  1001 1010
  // 10(2) + 11(3) = 101(5) //
  // 1001(9) + 1111(15) = 11000(24)

  answer = parseInt(+bin1, 2) + parseInt(+bin2, 2);
  return answer.toString(2);
}

// 다른 사람이 해결한 방법
// 이진수를 구현해버림
// 나는 메소드를 사용해서 구현했지만 이렇게 풀 수 있냐 없냐를 물어본거 아닐까싶음

function solution(bin1, bin2) {
  let temp = Number(bin1) + Number(bin2);
  temp = [...temp.toString()].reverse().map((v) => +v);

  for (let i = temp.length; i < 11; i++) {
    temp.push(0);
  }

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === 2) {
      temp[i] = 0;
      temp[i + 1]++;
    } else if (temp[i] === 3) {
      temp[i] = 1;
      temp[i + 1]++;
    }
  }
  return Number(temp.reverse().join("")).toString();
}

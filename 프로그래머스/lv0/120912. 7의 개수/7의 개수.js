// 내가 해결한 방법
// 처음에는 두번째 코드처럼 split까지 했다가 그 다음 for문을 돌려 시도했는데 되지 않아
// includes로 해결함
function solution(array) {
  var answer = 0;
  let a = array.toString();
  for (let item of a) {
    if (item.includes(7)) {
      answer += 1;
    } else {
      answer;
    }
  }
  return answer;
}

// 다른 사람이 해결한 방법
// ['77717'] -> ["", "", "", "1', ""].length === 5 -> length - 1 = 4
// length를 사용하는 방법도 생각해보자
function solution(array) {
  return array.join("").split("7").length - 1;
}

// 내가 해결한 방법
function solution(arr) {
  var stk = [];
  let i = 0;

  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    } else if (stk.length !== 0 && stk[stk.length - 1] === arr[i]) {
      stk.pop();
      i++;
    } else if (stk.length !== 0 && stk[stk.length - 1] !== arr[i]) {
      stk.push(arr[i]);
      i++;
    }
  }

  return stk.length === 0 ? [-1] : stk;
}

/**
 * 이번부터 서술 코드를 작성함
 * 경우의 수도 차분하게 생각할 수 있어서 좋았음
 * 이번 문제를 풀면서 at()이라는 메소드도 처음 알게 됌
 * chatAt과 다른 점이 무엇인고 하니 마지막 인덱스를 음수로 작성할 수 있는 것이었음
 * 예를 들어 arr[-1]이라고 작성하면 undefined가 떠서
 * 배열의 끝 인덱스를 작성하려면 arr[arr.length - 1]이라고 길게 코드를 쳐야했는데
 * 이제는 arr.at(-1)이라고 간단하게 쓸 수 있다
 * 가독성도 훨씬 좋은듯하다 자주 애용해야지
 * 여튼 새로 알게 된 메소드를 활용해 위의 코드를 아래와 같이 수정해보았음
 */

function solution(arr) {
  var stk = [];
  let i = 0;

  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    } else if (stk.length !== 0 && stk.at(-1) === arr[i]) {
      stk.pop();
      i++;
    } else if (stk.length !== 0 && stk.at(-1) !== arr[i]) {
      stk.push(arr[i]);
      i++;
    }
  }

  return stk.length === 0 ? [-1] : stk;
}
// 한결 더 나아졌지만 else if에 있는 length가 0이 아닌 조건을 삭제해도 될듯
// 그리고 length가 0일떄와 stk 마지막 요소와 arr[i]번째 요소가 같지 않으면
// 수행해야할 게 같으니까 or 연산자를 이용해 묶어줌

function solution(arr) {
  var stk = [];
  let i = 0;

  while (i < arr.length) {
    if (stk.length === 0 || stk.at(-1) !== arr[i]) {
      stk.push(arr[i]);
      i++;
    } else if (stk.at(-1) === arr[i]) {
      stk.pop();
      i++;
    }
  }

  return stk.length === 0 ? [-1] : stk;
}

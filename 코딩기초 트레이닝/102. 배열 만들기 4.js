function solution(arr) {
  var stk = [];
  let i = 0;
  arr.forEach((_, index) => {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    } else if (stk.length !== 0 && stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
      i++;
    } else if (stk.length !== 0 && stk[stk.length - 1] >= arr[i]) {
      stk.pop();
    }
  });
  return stk;
}

/**
 * 처음에는 이렇게 풀었는데 원하는 값이 나오지 않았다
 * 문제에서 요구한대로 한 것 같았는데 안 되는 거 보니
 * 뭔가 놓친 것 같았다
 *
 * 일단 stk.length가 0일때와 stk[stk.length - 1] < arr[i] 때
 * stk에 push해주는 건 같았기 때문에 합쳤다
 */

function solution(arr) {
  var stk = [];
  let i = 0;
  arr.forEach((_, index) => {
    if (stk.length === 0 || stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
      i++;
      console.log(i, "first");
    } else if (stk.length !== 0 && stk[stk.length - 1] >= arr[i]) {
      stk.pop();
      console.log(i, "first");
    }
  });
  return stk;
}

/**
 * 보기에는 좀 더 나아졌지만 결과는 같았다
 * forEach를 사용하면 인덱스를 순차적으로 순회하기 때문에
 * 직접 인덱스를 제어하는 방법과는 맞지 않았음
 * 따라서 while문을 사용해 조건이 충족될 때까지 반복하게 하고
 * 인덱스를 직접 제어해서 원하는 값을 push하거나 pop 하도록 함
 */

function solution(arr) {
    var stk = [];
    let i = 0;
    while (i < arr.length) {
      if (stk.length === 0 || stk[stk.length - 1] < arr[i]) {
        stk.push(arr[i]);
        i++;
      } else if (stk[stk.length - 1] >= arr[i]) {
        stk.pop();
      }
    }
    return stk;
  }

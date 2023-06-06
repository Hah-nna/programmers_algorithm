// 처음 풀었던 방법
function solution(arr) {
  if (!arr.includes(2)) {
    return [-1];
  } else {
    let firstIdx = arr.indexOf(2);
    let lastIdx = arr.lastIndexOf(2);
    return arr.slice(firstIdx, lastIdx + 1);
  }
}

// 다른 사람의 해결 방법 중 인상깊었던 방법

function solution(arr) {
  const from = arr.indexOf(2);
  const end = arr.lastIndexOf(2);

  return from === -1 ? [-1] : arr.slice(from, end + 1);
}

// 이미 사용하고 있는 indexOf 메소드를 활용한 삼항 연산자 굿

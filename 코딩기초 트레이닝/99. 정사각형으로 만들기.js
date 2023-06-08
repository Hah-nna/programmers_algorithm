// 내가 해결한 방법
function solution(arr) {
  let arrLength = arr.length;
  let firstEleLength = arr[0].length;

  if (arrLength > firstEleLength) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].concat(Array(arrLength - firstEleLength).fill(0));
    }
  }

  if (arrLength < firstEleLength)
    for (let j = 0; j < firstEleLength - arrLength; j++) {
      arr.push(Array(firstEleLength).fill(0));
    }

  return arr;
}

// 다른 사람의 해결 방법 중 인상 깊었던 방법

// 1
// Math.abs를 사용해 절대값을 활용한 게 마음에 들어서 넣었음
function solution(arr) {
  const ROWS = arr.length;
  const COLS = arr[0].length;
  const DIFF = Math.abs(ROWS - COLS);

  if (ROWS > COLS) {
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < DIFF; j++) {
        arr[i].push(0);
      }
    }
  } else if (ROWS < COLS) {
    for (let i = 0; i < DIFF; i++) {
      const row = new Array(COLS).fill(0);
      arr.push(row);
    }
  }

  return arr;
}

// 2
// 원래 내가 시도했던 방법 중에 while문이 있어 연습 겸 넣어놨음
// 코드 넘 깔끔쓰
function solution(arr) {
  let n = Math.max(arr.length, Math.max(...arr.map((v) => v.length)));
  for (let a of arr) while (a.length < n) a.push(0);
  while (arr.length < n) arr.push(Array(n).fill(0));
  return arr;
}

// 3
//Math.max를 사용한 방법
function solution(arr) {
  const N = Math.max(arr.length, arr[0].length);
  for (let i = 0; i < arr.length; i++) {
    while (arr[i].length < N) {
      arr[i].push(0);
    }
  }
  while (arr.length < N) {
    arr.push(Array(N).fill(0));
  }
  return arr;
}

// 2번 코드를 보고 내 코드를 아래와 같이 고쳐봄
// 두 번째 while문에서 arrLength++을 해주지 않아서 무한 루프 빠졌었음;
// while문 사용시 무한 루프 조심하자...
function solution(arr) {
  let arrLength = arr.length;
  let firstEleLength = arr[0].length;

  for (let item of arr) {
    while (item.length < arrLength) {
      item.push(0);
    }
  }

  while (arrLength < firstEleLength) {
    arr.push(Array(firstEleLength).fill(0));
    arrLength++;
  }
  return arr;
}

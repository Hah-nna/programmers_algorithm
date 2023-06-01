function solution(num_list) {
  let a = "";
  let b = "";

  num_list.forEach((value) => {
    if (value % 2 === 0) {
      a += value;
    } else {
      b += value;
    }
  });
  return Number(a) + Number(b);
}

// return 부분을 좀 더 깔끔하게 아래와 같이 바꿈

function solution(num_list) {
  let a = "";
  let b = "";

  num_list.forEach((value) => {
    if (value % 2 === 0) {
      a += value;
    } else {
      b += value;
    }
  });
  return +a + +b;
}

// if문을 삼항연산자를 사용해 좀 더 짧게 바꾸어봄

function solution(num_list) {
  let a = "";
  let b = "";

  num_list.forEach((value) => {
    value % 2 === 0 ? (a += value) : (b += value);
  });
  return +a + +b;
}

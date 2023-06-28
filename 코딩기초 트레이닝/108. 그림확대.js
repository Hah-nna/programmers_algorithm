// 내가 푼 방법
function solution(picture, k) {
  let answer = [];

  picture.map((p) => {
    const value = [...p].map((x) => x.repeat(k)).join("");
    for (let i = 0; i < k; i++) {
      answer.push(value);
    }
  });

  return answer;
}

// 다른 사람이 푼 방법들

// 1번
function solution(picture, k) {
  var answer = [];

  picture.map((a) => {
    let zz = "";
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < k; j++) {
        zz += a[i];
      }
    }
    for (let j = 0; j < k; j++) {
      answer.push(zz);
    }
  });

  return answer;
}

// 2번
function solution(picture, k) {
  let result = [];

  picture.map((v) => {
    const cur = [...v].map((c) => c.repeat(k)).join("");
    for (let i = 0; i < k; i++) result.push(cur);
  });

  return result;
}

// 3번
function solution(picture, k) {
  const arr = [];
  picture = picture.map((v) =>
    v
      .split("")
      .map((e) => e.repeat(k))
      .join("")
  );
  picture.forEach((m) => {
    for (let i = 0; i < k; i++) {
      arr.push(m);
    }
  });
  return arr;
}

// 4번
function solution(img, k) {
  const arr = img.map((v) => [...v].map((s) => s.repeat(k)).join(""));
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < k; j++) {
      array.push(arr[i]);
    }
  }
  return array;
}

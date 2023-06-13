// 내가 해결한 방법

function solution(my_string, queries) {
  let strArr = [...my_string];

  for (let i = 0; i < queries.length; i++) {
    const [s, e] = queries[i];

    let a = strArr.slice(s, e + 1).reverse();
    strArr.splice(s, a.length, ...a);
  }
  return strArr.join("");
}

// 처음에는 my_string을 복사한 배열 2개의
// 각각의 값을 참조해서 씌우려고 했는데 그렇게 하면 제대로 값이 안 들어가서 실패

// 그래서 자르고 넣는 방법으로 해결

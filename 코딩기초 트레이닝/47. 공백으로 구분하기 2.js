function solution(my_string) {
  return my_string.split(" ").filter((b) => b);
}

//split(" ")을 사용해 단어끼리 나누고
// filter를 통해 true인 값만 들어있는
// 새로운 배열을 리턴하자(공백은 falsy한 값이므로 포함x)

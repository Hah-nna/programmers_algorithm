function solution(myString) {
  var a = myString.split("x");

  return a.map((x) => x.length);
}

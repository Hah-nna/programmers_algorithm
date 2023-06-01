function solution(myString, pat) {
  let a = myString.toLowerCase();
  let b = pat.toLowerCase();
  if (a.includes(b)) {
    return 1;
  } else {
    return 0;
  }
}

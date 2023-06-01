function solution(myString, pat) {
  let a = [...myString].map((x) => (x === "A" ? "B" : "A")).join("");

  return a.includes(pat) ? 1 : 0;
}

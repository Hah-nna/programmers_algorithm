function solution(my_string, indices) {
  return [...my_string].filter((v, idx) => !indices.includes(idx)).join("");
}

function solution(my_string) {
  let lowercase = my_string.toLowerCase();
  return [...lowercase].sort().join("");
}

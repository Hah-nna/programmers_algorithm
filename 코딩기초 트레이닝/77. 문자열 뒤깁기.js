function solution(my_string, s, e) {
  let arr = [...my_string];
  let cutArr = arr.slice(s, e + 1).reverse();
  let firstArr = arr.slice(0, s);
  return [...firstArr, ...cutArr, ...arr.slice(e + 1)].join("");
}

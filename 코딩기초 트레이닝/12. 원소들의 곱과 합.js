function solution(num_list) {
  let a = 1;
  let b = 0;

  for (item of num_list) {
    a *= item;
    b += item;
  }

  return a < b ** 2 ? 1 : 0;
}

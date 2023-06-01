function solution(num_list) {
  let odd = 0;
  let even = 0;

  num_list.map((val, idx) => (idx % 2 === 0 ? (even += val) : (odd += val)));

  return even > odd ? even : odd;
}

function solution(my_string, alp) {
  if (my_string.includes(alp)) {
    return my_string.replaceAll(alp, alp.toUpperCase());
  } else {
    return my_string;
  }
}

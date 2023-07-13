function solution(emergency) {
  let sortedArr = [...emergency].sort((x, y) => y - x);
    // [76, 24, 3]
  return emergency.map((val) => sortedArr.indexOf(val) + 1);
    // [3 76 24]
    
}

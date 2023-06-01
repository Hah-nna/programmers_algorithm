function solution(date1, date2) {
  if (date1[0] < date2[0]) {
    return 1;
  } else if (date1[0] > date2[0]) {
    return 0;
  } else if (date1[1] < date2[1]) {
    return 1;
  } else if (date1[1] > date2[1]) {
    return 0;
  } else if (date1[2] < date2[2]) {
    return 1;
  } else if (date1[2] > date2[2]) {
    return 0;
  } else {
    return 0;
  }
}

// 다른 사람들이 해결한 방법
function solution(date1, date2) {
  return date1.join("") - date2.join("") < 0 ? 1 : 0;
}

const solution = (date1, date2) => (new Date(date1) < new Date(date2) ? 1 : 0);

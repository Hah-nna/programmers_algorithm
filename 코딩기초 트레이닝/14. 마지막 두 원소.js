function solution(num_list) {
  let answer = [...num_list];
  let lastNumber = num_list[num_list.length - 1];
  let frontNumber = num_list[num_list.length - 2];

  if (lastNumber > frontNumber) {
    answer.push(lastNumber - frontNumber);
  } else {
    answer.push(lastNumber * 2);
  }
  // 길이는 3, 근데 인덱스는 2
  //num_list[2]
  // if(num_list[-1] > num_list[-2]) {
  //     return num_list[-1] - num_list[-2]
  // } else {
  //     return num_list[-1] * 2
  // }
  return answer;
}

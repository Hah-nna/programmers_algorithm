function solution(num_list) {
    // 마지막 원소 > 그 전 원소 => 마지막 - 그전 원소
    // 마지막 원소 < 그 전 원소 => 마지막 * 2
    // push한 새로운 배열 리턴
    
    
    if(num_list[num_list.length - 1 ] > num_list[num_list.length - 2 ]) {
      const minusNum = num_list[num_list.length - 1 ] - num_list[num_list.length - 2 ]
      num_list.push(minusNum)
    } else {
 const multiplyNum = num_list[num_list.length - 1 ] * 2
 num_list.push(multiplyNum)
    }
    return num_list
}
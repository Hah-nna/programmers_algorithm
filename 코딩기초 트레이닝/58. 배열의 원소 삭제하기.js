function solution(arr, delete_list) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let isDeleted = false;
    for (let j = 0; j < delete_list.length; j++) {
      if (arr[i] === delete_list[j]) {
        isDeleted = true;
        break;
      }
    }
    if (!isDeleted) {
      result.push(arr[i]);
    }
  }
  return result;
}

function solution(arr, delete_list) {
  return arr.filter((n) => !delete_list.includes(n));
}

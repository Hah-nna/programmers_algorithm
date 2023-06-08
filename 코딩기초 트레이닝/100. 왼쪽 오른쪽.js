// 처음 시도한 방법
function solution(str_list) {
  let rIndex = str_list.indexOf("r");
  let lIndex = str_list.indexOf("l");

  if (lIndex < rIndex) {
    let leftList = str_list.slice(0, lIndex);
    return leftList.includes("l") ? [] : leftList;
  } else if (lIndex > rIndex) {
    let rightList = str_list.slice(rIndex + 1);
    return rightList.includes("r") ? [] : rightList;
  } else {
    return [];
  }
}

// 두 번째 시도한 방법
function solution(str_list) {
  let rIndex = str_list.indexOf("r");
  let lIndex = str_list.indexOf("l");

  if (lIndex !== -1 && (lIndex < rIndex || rIndex === -1)) {
    return str_list.slice(0, lIndex);
  } else if (rIndex !== -1 && (rIndex < lIndex || lIndex === -1)) {
    return str_list.slice(rIndex + 1);
  } else {
    return [];
  }
}

// 조건을 설정할 때 문제가 있었다
// 그리고 l이나 r이 연속해서 있을 수 있으므로 includes를 사용하면 안 됨
// 아예 if문의 조건을 수정하고 includes를 삭제함

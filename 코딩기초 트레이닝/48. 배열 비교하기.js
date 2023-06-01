function solution(arr1, arr2) {
  let a = arr1.reduce((pre, cur) => {
    return (pre += cur);
  }, 0);

  let b = arr2.reduce((pre, cur) => {
    return (pre += cur);
  }, 0);

  if (arr1.length > arr2.length) return 1;
  if (arr1.length < arr2.length) return -1;
  if (arr1.length === arr2.length && a > b) return 1;
  if (arr1.length === arr2.length && a < b) return -1;
  if (arr1.length === arr2.length && a === b) return 0;
}

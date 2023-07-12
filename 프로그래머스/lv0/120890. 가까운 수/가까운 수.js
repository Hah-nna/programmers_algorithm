// function solution(array, n) {    
//     let minusArr = array.map((val) => Math.abs(n - val))
//     // let idx = minusArr.indexOf(Math.min(...minusArr))
//     let minNum = Math.min(...minusArr)
//     let newArr = []
    
//     for(let item of minusArr) {
//         if(item === minNum) {
//             newArr.push(item)
//         }
//     }
     
//     return array[minusArr.indexOf(Math.min(...newArr))]
// }

function solution(array, n) {
  let minDifference = Infinity;
  let closestNumbers = [];

  for (let num of array) {
    const difference = Math.abs(num - n);

    if (difference < minDifference) {
      minDifference = difference;
      closestNumbers = [num];
    } else if (difference === minDifference) {
      closestNumbers.push(num);
    }
  }

  return Math.min(...closestNumbers);
}


function solution(numbers) {
    let numArr = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    
    numArr.forEach((str, idx) => {
        console.log(str, idx)
        numbers = numbers.replaceAll(str, idx)
        console.log(numbers)
    })
     return Number(numbers)
    }


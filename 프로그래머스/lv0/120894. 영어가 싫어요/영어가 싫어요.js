function solution(numbers) {
    let numArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero']
    let answer = '';
    let a = ''
    
    for(let item of numbers) {      
        a += item
        if(a === numArr[0]) {
            answer += '1';
            a = ''
        }else if(a === numArr[1]) {
            answer += '2';
            a = ''
        }else if(a === numArr[2]){
          answer += '3';
            a = ''
        }else if(a === numArr[3]) {
            answer += '4';
            a = ''
        }else if(a === numArr[4]){
          answer += '5';
            a = ''
        }else if(a === numArr[5]) {
          answer += '6';
            a = ''
        } else if(a === numArr[6]) {
            answer += '7';
            a = ''
        }else if(a === numArr[7]) {
          answer += '8';
            a = ''
        }else if(a === numArr[8]) {
            answer += '9';
            a = ''
        }else if(a === numArr[9]){
            answer += '0';
            a = ''
        }
    }
 return Number(answer)
}
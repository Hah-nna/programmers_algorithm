function solution(bin1, bin2) {
    var answer = '';
    
    // 0 1 2  3  4    5    6    7    8     9     10
    // 0 1 10 11 100  101  110  111  1000  1001 1010
    // 10(2) + 11(3) = 101(5) // 
    // 1001(9) + 1111(15) = 11000(24) 
    
    answer = parseInt(+bin1, 2) + parseInt(+bin2, 2)
    return answer.toString(2)
}
function solution(nums) {
    var answer = 0;
    const n = nums.length / 2
    const set = new Set([...nums])
    
    
    for(let i = 0; i < n; i++) {
        console.log("a1", answer)
        if(set.size < n) {
            return set.size
            break;
        } else {
            answer++
        if(answer === n) break;    
        }
        
    }
    
    return answer
}


// function solution(nums) {
//     let answer = 0;
//     const select = nums.length/2;
//     const check = nums.reduce((total,cur) => {
//         total[cur] ? total[cur]++ : total[cur] = 1;
//         return total;
//     },{});
//     const checkLeng = Object.keys(check).length;
//     return checkLeng > select ? select : checkLeng;
// }